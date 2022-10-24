import { Blaze } from './Blaze';

export type ConstructorParams = {
  partnerKey: string;
  storeKeys: { [key: string]: string };
  requestQueue: RequestQueue;
  baseUrl: string;
};

export type RequestConfig = {
  method: string;
  url: string;
  data?: string;
  headers: { [key: string]: string };
};

export type RequestQueue = {
  push: (config: RequestConfig) => Promise<any>;
};

/**
 * BlazeAPIClient fetches Blaze content for all stores provided using the
 * provided partner key. It does not care what request library or queue system
 * you use, it only queues up the requests and handles the formatting of params.
 */
export default class BlazeAPIClient {
  partnerKey: string;
  storeKeys: { [key: string]: string };
  requestQueue: RequestQueue;
  baseUrl: string;

  constructor({
    partnerKey,
    storeKeys,
    requestQueue,
    baseUrl,
  }: ConstructorParams) {
    this.partnerKey = partnerKey;
    this.storeKeys = storeKeys;
    this.requestQueue = requestQueue;
    this.baseUrl = baseUrl;
  }

  async fetchAll() {
    const [
      allProducts,
      allBatches,
      allBrands,
      allStores,
      allBatchQuantities,
      allCategories,
      allRewards,
    ] = await Promise.all([
      this._fetchAllProducts(),
      this._fetchAllBatches(),
      this._fetchAllBrands(),
      this._fetchAllStores(),
      this._fetchAllBatchQuantities(),
      this._fetchAllCategories(),
      this._fetchAllRewards(),
    ]);

    return {
      products: allProducts,
      batches: allBatches,
      brands: allBrands,
      stores: allStores,
      batchQuantities: allBatchQuantities,
      categories: allCategories,
      rewards: allRewards,
    };
  }

  _requestHeaders(storeKey: string) {
    return {
      Partner_Key: this.partnerKey,
      Authorization: storeKey,
    };
  }

  async _fetchWithPagination({
    path,
    storeKey,
    params = {},
    resultsPerPage = 50,
  }: {
    path: string;
    storeKey: string;
    params?: { [key: string]: string };
    resultsPerPage?: number;
  }): Promise<any> {
    const promises: Promise<any>[] = [];
    const values: any[] = [];
    const urlSearchParams = new URLSearchParams(params);

    urlSearchParams.set('limit', `${resultsPerPage}`);
    urlSearchParams.set('start', '0');
    urlSearchParams.set('skip', '0');

    const firstPage = await this.requestQueue.push({
      method: 'GET',
      url: `${this.baseUrl}${path}?${urlSearchParams.toString()}`,
      headers: this._requestHeaders(storeKey),
    });
    values.push(...firstPage.data.values);

    // Fetch subsequent pages if there's more than one page of results
    if (firstPage.data.total > resultsPerPage) {
      for (
        let pageNumber = 1;
        pageNumber <= Math.ceil(firstPage.data.total / resultsPerPage);
        pageNumber++
      ) {
        // Blaze doesn't respect "start" for products. Only "skip" works?
        urlSearchParams.set('start', `${pageNumber * resultsPerPage}`);
        urlSearchParams.set('skip', `${pageNumber * resultsPerPage}`);

        this.requestQueue
          .push({
            method: 'GET',
            url: `${this.baseUrl}${path}?${urlSearchParams.toString()}`,
            headers: this._requestHeaders(storeKey),
          })
          .then((response) => {
            values.push(...response.data.values);
            return response;
          });
      }
    }

    await Promise.all(promises);
    return values;
  }

  async _fetchAllCategories(): Promise<Blaze.Category[]> {
    const results: Blaze.Category[][] = await Promise.all(
      Object.keys(this.storeKeys).map((storeKey) => {
        return this._fetchWithPagination({
          path: '/api/v1/public/inventory/categories',
          storeKey,
        });
      }),
    );

    const allCategories: Blaze.Category[] = [];
    results.forEach((category) => {
      allCategories.push(...category);
    });

    return allCategories;
  }

  async _fetchAllStores(): Promise<Blaze.Shop[]> {
    const responses: { data: { shop: Blaze.Shop } }[] = await Promise.all(
      Object.keys(this.storeKeys).map((storeKey) => {
        return this.requestQueue.push({
          method: 'GET',
          url: `${this.baseUrl}/api/v1/partner/store`,
          headers: this._requestHeaders(storeKey),
        });
      }),
    );

    return responses.map((response) => response.data.shop);
  }

  async _fetchAllProducts(): Promise<Blaze.Product[]> {
    const results: Blaze.Product[][] = await Promise.all(
      Object.keys(this.storeKeys).map((storeKey) => {
        return this._fetchWithPagination({
          path: '/api/v1/partner/products',
          storeKey,
        });
      }),
    );

    const allStoresProducts: Blaze.Product[] = [];
    results.forEach((storeProducts) => {
      allStoresProducts.push(...storeProducts);
    });

    return allStoresProducts;
  }

  async _fetchAllBrands(): Promise<Blaze.Brand[]> {
    return this._fetchWithPagination({
      path: '/api/v1/partner/store/inventory/brands',
      storeKey: Object.keys(this.storeKeys)[0],
    });
  }

  async _fetchAllBatchQuantities(): Promise<Blaze.BatchQuantity[]> {
    const results: Blaze.BatchQuantity[][] = await Promise.all(
      Object.keys(this.storeKeys).map((storeKey) => {
        return this._fetchWithPagination({
          path: '/api/v1/partner/store/batches/quantities',
          storeKey,
          params: { inventoryId: this.storeKeys[storeKey] },
        });
      }),
    );

    const allStoresBatchQuantities: Blaze.BatchQuantity[] = [];
    results.forEach((batchQuantities) => {
      allStoresBatchQuantities.push(...batchQuantities);
    });
    return allStoresBatchQuantities;
  }

  async _fetchAllBatches(): Promise<Blaze.Batch[]> {
    const validStatus = ['RECEIVED', 'READY_FOR_SALE'];
    const allStoresBatches: Blaze.Batch[] = [];

    for (const status of validStatus) {
      const results: Blaze.Batch[][] = await Promise.all(
        Object.keys(this.storeKeys).map((storeKey) => {
          return this._fetchWithPagination({
            path: '/api/v1/partner/store/batches',
            storeKey,
            params: { status },
          });
        }),
      );
      results.forEach((storeBatches) => {
        allStoresBatches.push(...storeBatches);
      });
    }

    return allStoresBatches;
  }

  async _fetchAllRewards(): Promise<Blaze.Reward[]> {
    const results: Blaze.Reward[][] = await Promise.all(
      Object.keys(this.storeKeys).map((storeKey) => {
        return this._fetchWithPagination({
          path: '/api/v1/partner/loyalty/rewards/',
          storeKey,
        });
      }),
    );

    const allRewards: any = [];
    results.forEach((reward) => {
      allRewards.push(...reward);
    });

    return allRewards;
  }
}

export * from './Blaze';
