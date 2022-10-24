export declare namespace Blaze {
  type Batch = any; // @todo: add
  type BatchQuantity = any; // @todo: add
  type Reward = any; // @todo: add

  export type Asset = {
    active: boolean;
    assetType: string;
    companyId: string;
    created: number;
    deleted: boolean;
    id: string;
    key: string;
    largeURL: string;
    largeX2URL: string;
    mediumURL: string;
    modified: number;
    name: string;
    origURL: string;
    priority: number;
    publicURL: string;
    secured: boolean;
    thumbURL: string;
    type: string;
    updated: boolean;
  };

  export type Store = {
    companyLogoURL: string;
    contract: {
      active: boolean;
      companyId: string;
      contentType: string;
      created: number;
      deleted: boolean;
      dirty: boolean;
      enableEmployeeSignature: boolean;
      enableWitnessSignature: boolean;
      id: string;
      modified: number;
      name: string;
      pdfFile: {
        active: boolean;
        assetType: string;
        companyId: string;
        created: number;
        deleted: boolean;
        id: string;
        key: string;
        largeURL: string;
        largeX2URL: string;
        mediumURL: string;
        modified: number;
        name: string;
        origURL: string;
        priority: number;
        publicURL: string;
        secured: boolean;
        thumbURL: string;
        type: string;
        updated: boolean;
      };
      required: boolean;
      shopId: string;
      text: string;
      updated: boolean;
      version: number;
    };
    shop: {
      active: boolean;
      address: {
        address: string;
        addressLine2: string;
        city: string;
        companyId: string;
        country: string;
        created: number;
        deleted: boolean;
        id: string;
        latitude: number;
        longitude: number;
        modified: number;
        state: string;
        updated: boolean;
        zipCode: string;
      };
      ageLimit: number;
      alExciseOnZeroPrice: boolean;
      allowAnonymousOrders: boolean;
      appTarget: string;
      appendBrandNameWM: boolean;
      assets: Asset[];
      autoCashDrawer: boolean;
      bccEmailAddress: string;
      blazeConnections: [string];
      blazePayFeeList: [
        {
          companyId: string;
          created: number;
          deleted: boolean;
          dirty: boolean;
          enabled: boolean;
          fee: number;
          feeType: string;
          id: string;
          modified: number;
          shopId: string;
          subTotalThreshold: number;
          type: string;
          updated: boolean;
        },
      ];
      cartMinimums: {
        cartMinimumDetails: [
          {
            distance: number;
            enabled: boolean;
            minimum: number;
            zipCodes: [string];
          },
        ];
        companyId: string;
        created: number;
        deleted: boolean;
        id: string;
        minimumsType: string;
        modified: number;
        updated: boolean;
      };
      checkDuplicateDl: boolean;
      checkoutType: string;
      companyId: string;
      created: number;
      creditCardFeeList: [
        {
          companyId: string;
          created: number;
          deleted: boolean;
          dirty: boolean;
          enabled: boolean;
          fee: number;
          feeType: string;
          id: string;
          modified: number;
          shopId: string;
          subTotalThreshold: number;
          type: string;
          updated: boolean;
        },
      ];
      creditFefundType: string;
      defaultCountry: string;
      defaultHandOverMin: number;
      defaultPinTimeout: number;
      deleted: boolean;
      deliveryFee: number;
      deliveryFees: [
        {
          companyId: string;
          created: number;
          deleted: boolean;
          distance: number;
          enabled: boolean;
          fee: number;
          feeType: string;
          id: string;
          modified: number;
          subTotalThreshold: number;
          type: string;
          updated: boolean;
          zipCodes: [string];
        },
      ];
      deliveryMaxOrders: number;
      deliveryRefundType: string;
      disableMedicalProductsForAdultUse: boolean;
      emailAdress: string;
      emailAttachment: {
        active: boolean;
        assetType: string;
        companyId: string;
        created: number;
        deleted: boolean;
        id: string;
        key: string;
        largeURL: string;
        largeX2URL: string;
        mediumURL: string;
        modified: number;
        name: string;
        origURL: string;
        priority: number;
        publicURL: string;
        secured: boolean;
        thumbURL: string;
        type: string;
        updated: boolean;
      };
      emailList: [string];
      emailMessage: string;
      enableAfterTaxDiscountNotes: boolean;
      enableAgeLimit: boolean;
      enableAutoPrintAtFulfillment: boolean;
      enableBCCReceipt: boolean;
      enableCannabisLimit: boolean;
      enableCartDiscountNotes: boolean;
      enableCashInOut: boolean;
      enableCommittedValidation: boolean;
      enableComplianceTesting: boolean;
      enableCustomerIdentification: boolean;
      enableDOBNameUniqueness: boolean;
      enableDailySummaryEmail: boolean;
      enableDeferTransactions: boolean;
      enableDeliveryFee: boolean;
      enableDeliverySignature: boolean;
      enableDiscountNotes: boolean;
      enableExciseTax: boolean;
      enableGPSTracking: boolean;
      enableHarvestTax: boolean;
      enableIncomingOrders: boolean;
      enableLowInventoryEmail: boolean;
      enableMedicinalAge: boolean;
      enableOnFleet: boolean;
      enablePinForCashDrawer: boolean;
      enableRefundNote: boolean;
      enableSaleLogout: boolean;
      enableSpringBig: boolean;
      enableTip: boolean;
      enableTipsBlazePay: boolean;
      enableTookan: boolean;
      enableUnAssignedOnfleetOrder: boolean;
      enableWaive: boolean;
      enableWooCommerce: boolean;
      enforceCashDrawers: boolean;
      exciseTaxType: string;
      flowerType: [string];
      getdraftOrderTimeout: number;
      hubId: string;
      hubName: string;
      id: string;
      invoiceNote: string;
      invoiceTermCondition: string;
      latitude: number;
      legalLanguage: string;
      license: string;
      logo: {
        active: boolean;
        assetType: string;
        companyId: string;
        created: number;
        deleted: boolean;
        id: string;
        key: string;
        largeURL: string;
        largeX2URL: string;
        mediumURL: string;
        modified: number;
        name: string;
        origURL: string;
        priority: number;
        publicURL: string;
        secured: boolean;
        thumbURL: string;
        type: string;
        updated: boolean;
      };
      longitude: number;
      marketingSources: [string];
      medicinalAge: number;
      membersCountSyncDate: number;
      membersTag: [string];
      modified: number;
      nalExciseFromRetailCost: boolean;
      name: string;
      nextSnapshotTime: number;
      nonCannabisTaxes: {
        alExciseOnZeroPrice: boolean;
        enableNonCannabisTax: boolean;
        nalExciseFromRetailCost: boolean;
        nonCannabisType: string;
        taxInfo: {
          cityTax: number;
          created: number;
          deleted: boolean;
          federalTax: number;
          id: string;
          modified: number;
          stateTax: number;
          updated: boolean;
        };
        taxOrder: string;
        taxTables: [
          {
            active: boolean;
            cityTax: {
              active: boolean;
              activeExciseTax: boolean;
              companyId: string;
              compound: boolean;
              created: number;
              deleted: boolean;
              dirty: boolean;
              displayName: string;
              id: string;
              modified: number;
              shopId: string;
              taxOrder: string;
              taxRate: number;
              territory: string;
              updated: boolean;
            };
            companyId: string;
            consumerType: string;
            countyTax: {
              active: boolean;
              activeExciseTax: boolean;
              companyId: string;
              compound: boolean;
              created: number;
              deleted: boolean;
              dirty: boolean;
              displayName: string;
              id: string;
              modified: number;
              shopId: string;
              taxOrder: string;
              taxRate: number;
              territory: string;
              updated: boolean;
            };
            created: number;
            deleted: boolean;
            dirty: boolean;
            federalTax: {
              active: boolean;
              activeExciseTax: boolean;
              companyId: string;
              compound: boolean;
              created: number;
              deleted: boolean;
              dirty: boolean;
              displayName: string;
              id: string;
              modified: number;
              shopId: string;
              taxOrder: string;
              taxRate: number;
              territory: string;
              updated: boolean;
            };
            id: string;
            modified: number;
            name: string;
            shopId: string;
            stateTax: {
              active: boolean;
              activeExciseTax: boolean;
              companyId: string;
              compound: boolean;
              created: number;
              deleted: boolean;
              dirty: boolean;
              displayName: string;
              id: string;
              modified: number;
              shopId: string;
              taxOrder: string;
              taxRate: number;
              territory: string;
              updated: boolean;
            };
            taxOrder: string;
            taxType: string;
            updated: boolean;
          },
        ];
        useComplexTax: boolean;
      };
      numAllowActiveTrans: number;
      onFleetAllowEmptyOrders: boolean;
      onFleetApiKey: string;
      onFleetOrganizationId: string;
      onFleetOrganizationName: string;
      onFleetRequired: boolean;
      onFleetTwoAutoPack: boolean;
      onFleetTwoWay: boolean;
      onFleetTwoWayRevert: boolean;
      onFleetTwoWayUpdateSchedule: boolean;
      onfleetOverrideUrl: string;
      onlineStoreInfo: {
        activeInventoryId: string;
        cartMinType: string;
        cartMinimum: number;
        colorTheme: string;
        companyId: string;
        created: number;
        customCss: string;
        customMessageETA: string;
        defaultETA: number;
        deleted: boolean;
        dirty: boolean;
        enableDelivery: boolean;
        enableDeliveryAreaRestrictions: boolean;
        enableHtmlText: boolean;
        enableInventory: boolean;
        enableInventoryType: string;
        enableOnlinePOS: boolean;
        enableOnlineShipment: boolean;
        enableOtherMarketingSource: boolean;
        enableProductReviews: boolean;
        enableStorePickup: boolean;
        enabled: boolean;
        htmlText: string;
        id: string;
        modified: number;
        pageOneMessageBody: string;
        pageOneMessageTitle: string;
        restrictedZipCodes: [string];
        shopId: string;
        storeHexColor: string;
        submissionMessage: string;
        supportEmail: string;
        updated: boolean;
        useCustomETA: boolean;
        viewType: string;
        websiteOrigins: string;
        websiteUrl: string;
      };
      orderTags: [string];
      pennyTransactionOption: string;
      phoneNumber: string;
      poNote: string;
      poTermCondition: string;
      productPriceIncludeExciseTax: boolean;
      productsTag: [string];
      receiptInfo: [
        {
          aboveFreeText: string;
          companyId: string;
          created: number;
          deleted: boolean;
          dirty: boolean;
          emailAttachment: {
            active: boolean;
            assetType: string;
            companyId: string;
            created: number;
            deleted: boolean;
            id: string;
            key: string;
            largeURL: string;
            largeX2URL: string;
            mediumURL: string;
            modified: number;
            name: string;
            origURL: string;
            priority: number;
            publicURL: string;
            secured: boolean;
            thumbURL: string;
            type: string;
            updated: boolean;
          };
          emailMessage: string;
          enableBrand: boolean;
          enableEmployeeId: boolean;
          enableEmployeeName: boolean;
          enableExciseTaxAsItem: boolean;
          enableIncludeItemInSKU: boolean;
          enableItemDiscount: boolean;
          enableItemDiscountNotes: boolean;
          enableLicenseeBusinessName: boolean;
          enableMemberAddress: boolean;
          enableMemberId: boolean;
          enableMemberLoyaltyPoints: boolean;
          enableMemberName: boolean;
          enableMemberPhoneNo: boolean;
          enableNotes: boolean;
          enableOrderDateTime: boolean;
          enablePreparedByEmployeeId: boolean;
          enableShopAddress: boolean;
          enableShopLicenseNumber: boolean;
          enableShopPhoneNo: boolean;
          enabledBottomFreeText: boolean;
          enabledFreeText: boolean;
          freeText: string;
          id: string;
          licenseeBusinessName: string;
          modified: number;
          receiptType: string;
          shopId: string;
          updated: boolean;
        },
      ];
      receivingInventoryId: string;
      requireValidRecDate: boolean;
      restrictIncomingOrderNotifications: boolean;
      restrictedNotificationTerminals: [string];
      restrictedViews: boolean;
      roundOffType: string;
      roundUpMessage: string;
      shopType: string;
      shortIdentifier: string;
      showDeliveryQueue: boolean;
      showOnlineQueue: boolean;
      showProductByAvailableQuantity: boolean;
      showSpecialQueue: boolean;
      showWalkInQueue: boolean;
      snapshopTime: number;
      taxInfo: {
        cityTax: number;
        created: number;
        deleted: boolean;
        federalTax: number;
        id: string;
        modified: number;
        stateTax: number;
        updated: boolean;
      };
      taxOrder: string;
      taxRoundOffType: string;
      taxTables: [
        {
          active: boolean;
          cityTax: {
            active: boolean;
            activeExciseTax: boolean;
            companyId: string;
            compound: boolean;
            created: number;
            deleted: boolean;
            dirty: boolean;
            displayName: string;
            id: string;
            modified: number;
            shopId: string;
            taxOrder: string;
            taxRate: number;
            territory: string;
            updated: boolean;
          };
          companyId: string;
          consumerType: string;
          countyTax: {
            active: boolean;
            activeExciseTax: boolean;
            companyId: string;
            compound: boolean;
            created: number;
            deleted: boolean;
            dirty: boolean;
            displayName: string;
            id: string;
            modified: number;
            shopId: string;
            taxOrder: string;
            taxRate: number;
            territory: string;
            updated: boolean;
          };
          created: number;
          deleted: boolean;
          dirty: boolean;
          federalTax: {
            active: boolean;
            activeExciseTax: boolean;
            companyId: string;
            compound: boolean;
            created: number;
            deleted: boolean;
            dirty: boolean;
            displayName: string;
            id: string;
            modified: number;
            shopId: string;
            taxOrder: string;
            taxRate: number;
            territory: string;
            updated: boolean;
          };
          id: string;
          modified: number;
          name: string;
          shopId: string;
          stateTax: {
            active: boolean;
            activeExciseTax: boolean;
            companyId: string;
            compound: boolean;
            created: number;
            deleted: boolean;
            dirty: boolean;
            displayName: string;
            id: string;
            modified: number;
            shopId: string;
            taxOrder: string;
            taxRate: number;
            territory: string;
            updated: boolean;
          };
          taxOrder: string;
          taxType: string;
          updated: boolean;
        },
      ];
      termSalesOption: string;
      timeZone: string;
      timezoneOffsetInMinutes: number;
      tookanRequired: boolean;
      twilioNumber: string;
      updated: boolean;
      useAssignedEmployee: boolean;
      useComplexTax: boolean;
    };
    toleranceMap: {
      [key: string]: {
        companyId: string;
        created: number;
        deleted: boolean;
        enabled: boolean;
        endWeight: number;
        id: string;
        modified: number;
        name: string;
        priority: number;
        startWeight: number;
        unitValue: number;
        updated: boolean;
        weightKey: string;
        weightValue: number;
      };
    };
  };

  export type Shop = Blaze.Store['shop'];

  export type Category = {
    active: boolean;
    cannabis: boolean;
    cannabisType: string;
    companyId: string;
    complianceId: string;
    created: number;
    deleted: boolean;
    dirty: boolean;
    externalId: string;
    id: string;
    lowThreshold: number;
    modified: number;
    name: string;
    photo: {
      active: boolean;
      assetType: string;
      companyId: string;
      created: number;
      deleted: boolean;
      id: string;
      key: string;
      largeURL: string;
      largeX2URL: string;
      mediumURL: string;
      modified: number;
      name: string;
      origURL: string;
      priority: number;
      publicURL: string;
      secured: boolean;
      thumbURL: string;
      type: string;
      updated: boolean;
    };
    priority: number;
    shopId: string;
    unitType: string;
    updated: boolean;
    wmCategory: string;
  };

  export type Product = {
    active: boolean;
    assets: [
      {
        active: boolean;
        assetType: string;
        companyId: string;
        created: number;
        deleted: boolean;
        id: string;
        key: string;
        largeURL: string;
        largeX2URL: string;
        mediumURL: string;
        modified: number;
        name: string;
        origURL: string;
        priority: number;
        publicURL: string;
        secured: boolean;
        thumbURL: string;
        type: string;
        updated: boolean;
      },
    ];
    automaticReOrder: boolean;
    brand: {
      active: boolean;
      brandLogo: {
        active: boolean;
        assetType: string;
        companyId: string;
        created: number;
        deleted: boolean;
        id: string;
        key: string;
        largeURL: string;
        largeX2URL: string;
        mediumURL: string;
        modified: number;
        name: string;
        origURL: string;
        priority: number;
        publicURL: string;
        secured: boolean;
        thumbURL: string;
        type: string;
        updated: boolean;
      };
      companyId: string;
      created: number;
      default: boolean;
      deleted: boolean;
      externalId: string;
      id: string;
      modified: number;
      name: string;
      phoneNo: string;
      updated: boolean;
      vendorList: [string];
      website: string;
    };
    brandId: string;
    bundleItems: [
      {
        productId: string;
        quantity: number;
      },
    ];
    byGram: boolean;
    byPrepackage: boolean;
    cannabisType: string;
    category: {
      active: boolean;
      cannabis: boolean;
      cannabisType: string;
      companyId: string;
      complianceId: string;
      created: number;
      deleted: boolean;
      dirty: boolean;
      externalId: string;
      id: string;
      lowThreshold: number;
      modified: number;
      name: string;
      photo: {
        active: boolean;
        assetType: string;
        companyId: string;
        created: number;
        deleted: boolean;
        id: string;
        key: string;
        largeURL: string;
        largeX2URL: string;
        mediumURL: string;
        modified: number;
        name: string;
        origURL: string;
        priority: number;
        publicURL: string;
        secured: boolean;
        thumbURL: string;
        type: string;
        updated: boolean;
      };
      priority: number;
      shopId: string;
      unitType: string;
      updated: boolean;
      wmCategory: string;
    };
    categoryId: string;
    cbd: 'double';
    cbda: 'double';
    cbn: 'double';
    committedQuantities: {
      [key: string]: number;
    };
    companyId: string;
    sku: string;
    complianceId: string;
    created: number;
    customGramType: string;
    customTaxInfo: {
      cityTax: number;
      created: number;
      deleted: boolean;
      federalTax: number;
      id: string;
      modified: number;
      stateTax: number;
      updated: boolean;
    };
    customWeight: number;
    deleted: boolean;
    description: string;
    dirty: boolean;
    discountEnabled: boolean;
    discountable: boolean;
    dispatchPrepackageItemId: string;
    enableExciseTax: boolean;
    enableMixMatch: boolean;
    enableWeedmap: boolean;
    externalId: string;
    flowerType: string;
    genetics: string;
    id: string;
    importId: string;
    importSrc: string;
    instock: boolean;
    lastLeaflySyncStatus: boolean;
    lastLeaflySyncTime: number;
    lastWMSyncTime: number;
    lowInventoryNotification: boolean;
    lowThreshold: number;
    medicalConditions: [
      {
        created: number;
        deleted: boolean;
        id: string;
        modified: number;
        name: string;
        updated: boolean;
      },
    ];
    medicinal: boolean;
    modified: number;
    name: string;
    notes: [
      {
        created: number;
        deleted: boolean;
        enableOnFleet: boolean;
        id: string;
        message: string;
        modified: number;
        updated: boolean;
        writerId: string;
        writerName: string;
      },
    ];
    overrideMetrcCategoryId: string;
    potency: boolean;
    potencyAmount: {
      cbd: number;
      cbda: number;
      cbn: number;
      thc: number;
      thca: number;
    };
    prepackageQuantities: {
      [key: string]: {
        committedQuantities: {
          [key: string]: number;
        };
        sellableQuantities: {
          [key: string]: number;
        };
        totalCommittedQuantity: number;
        totalSellableQuantity: number;
      };
    };
    priceBreaks: [
      {
        active: boolean;
        assignedPrice: number;
        companyId: string;
        created: number;
        deleted: boolean;
        displayName: string;
        id: string;
        modified: number;
        name: string;
        price: number;
        priceBreakType: string;
        priority: number;
        quantity: number;
        salePrice: number;
        updated: boolean;
      },
    ];
    priceIncludesALExcise: boolean;
    priceIncludesExcise: boolean;
    priceRanges: [
      {
        assignedPrice: number;
        id: string;
        price: number;
        priority: number;
        salePrice: number;
        weightTolerance: {
          companyId: string;
          created: number;
          deleted: boolean;
          enabled: boolean;
          endWeight: number;
          id: string;
          modified: number;
          name: string;
          priority: number;
          startWeight: number;
          unitValue: number;
          updated: boolean;
          weightKey: string;
          weightValue: number;
        };
        weightToleranceId: string;
      },
    ];
    pricingTemplateId: string;
    producerAddress: {
      address: string;
      addressLine2: string;
      city: string;
      companyId: string;
      country: string;
      created: number;
      deleted: boolean;
      id: string;
      latitude: number;
      longitude: number;
      modified: number;
      state: string;
      updated: boolean;
      zipCode: string;
    };
    producerLicense: string;
    producerMfg: string;
    productSaleType: string;
    productType: string;
    qbItemRef: string;
    quantities: [
      {
        companyId: string;
        created: number;
        deleted: boolean;
        dirty: boolean;
        id: string;
        inventoryId: string;
        modified: number;
        quantity: number;
        shopId: string;
        updated: boolean;
      },
    ];
    reOrderLevel: number;
    salesPrice: number;
    secondaryVendors: [string];
    sellable: boolean;
    sellableQuantities: {
      [key: string]: number;
    };
    shopId: string;
    showInWidget: boolean;
    companyLinkId: string;
    syncToThirdPartyMenus: boolean;
    tags: string[];
    taxOrder: string;
    taxTables: [
      {
        active: boolean;
        cityTax: {
          active: boolean;
          activeExciseTax: boolean;
          companyId: string;
          compound: boolean;
          created: number;
          deleted: boolean;
          dirty: boolean;
          displayName: string;
          id: string;
          modified: number;
          shopId: string;
          taxOrder: string;
          taxRate: number;
          territory: string;
          updated: boolean;
        };
        companyId: string;
        consumerType: string;
        countyTax: {
          active: boolean;
          activeExciseTax: boolean;
          companyId: string;
          compound: boolean;
          created: number;
          deleted: boolean;
          dirty: boolean;
          displayName: string;
          id: string;
          modified: number;
          shopId: string;
          taxOrder: string;
          taxRate: number;
          territory: string;
          updated: boolean;
        };
        created: number;
        deleted: boolean;
        dirty: boolean;
        federalTax: {
          active: boolean;
          activeExciseTax: boolean;
          companyId: string;
          compound: boolean;
          created: number;
          deleted: boolean;
          dirty: boolean;
          displayName: string;
          id: string;
          modified: number;
          shopId: string;
          taxOrder: string;
          taxRate: number;
          territory: string;
          updated: boolean;
        };
        id: string;
        modified: number;
        name: string;
        shopId: string;
        stateTax: {
          active: boolean;
          activeExciseTax: boolean;
          companyId: string;
          compound: boolean;
          created: number;
          deleted: boolean;
          dirty: boolean;
          displayName: string;
          id: string;
          modified: number;
          shopId: string;
          taxOrder: string;
          taxRate: number;
          territory: string;
          updated: boolean;
        };
        taxOrder: string;
        taxType: string;
        updated: boolean;
      },
    ];
    taxType: string;
    thc: 'double';
    thca: 'double';
    toleranceId: string;
    totalCommittedQuantity: number;
    totalSellableQuantity: number;
    unitPrice: number;
    unitValue: number;
    updated: boolean;
    usableMarijuana: number;
    vendor: {
      accountOwnerId: string;
      active: boolean;
      additionalAddressList: [
        {
          address: string;
          addressLine2: string;
          city: string;
          companyId: string;
          country: string;
          created: number;
          deleted: boolean;
          id: string;
          latitude: number;
          longitude: number;
          modified: number;
          state: string;
          updated: boolean;
          zipCode: string;
        },
      ];
      address: {
        address: string;
        addressLine2: string;
        city: string;
        companyId: string;
        country: string;
        created: number;
        deleted: boolean;
        id: string;
        latitude: number;
        longitude: number;
        modified: number;
        state: string;
        updated: boolean;
        zipCode: string;
      };
      armsLengthType: string;
      assets: [
        {
          active: boolean;
          assetType: string;
          companyId: string;
          created: number;
          deleted: boolean;
          id: string;
          key: string;
          largeURL: string;
          largeX2URL: string;
          mediumURL: string;
          modified: number;
          name: string;
          origURL: string;
          priority: number;
          publicURL: string;
          secured: boolean;
          thumbURL: string;
          type: string;
          updated: boolean;
        },
      ];
      backOrderEnabled: boolean;
      brands: [string];
      companyId: string;
      companyLicenses: [
        {
          companyType: string;
          created: number;
          deleted: boolean;
          id: string;
          licenseExpirationDate: number;
          licenseNumber: string;
          licenseType: string;
          modified: number;
          toDefault: boolean;
          updated: boolean;
        },
      ];
      companyType: string;
      connectedShop: string;
      contactPerson: string;
      created: number;
      createdBy: string;
      credits: number;
      dbaName: string;
      defaultContactId: string;
      defaultPaymentTerm: string;
      deleted: boolean;
      description: string;
      email: string;
      externalId: string;
      fax: string;
      firstName: string;
      id: string;
      importId: string;
      lastName: string;
      licenceType: string;
      licenseExpirationDate: number;
      licenseNumber: string;
      mobileNumber: string;
      modified: number;
      name: string;
      notes: [
        {
          created: number;
          deleted: boolean;
          enableOnFleet: boolean;
          id: string;
          message: string;
          modified: number;
          updated: boolean;
          writerId: string;
          writerName: string;
        },
      ];
      phone: string;
      qbVendorRef: [
        {
          [key: string]: string;
        },
      ];
      relatedEntity: boolean;
      salesPerson: string;
      toDefault: boolean;
      updated: boolean;
      vendorKey: string;
      vendorType: string;
      website: string;
    };
    vendorId: string;
    weightPerUnit: string;
    wmOnlineSellable: boolean;
    wmThreshold: number;
  };

  export type Brand = {
    active: boolean;
    brandLogo: {
      active: boolean;
      assetType: string;
      companyId: string;
      created: number;
      deleted: boolean;
      id: string;
      key: string;
      largeURL: string;
      largeX2URL: string;
      mediumURL: string;
      modified: number;
      name: string;
      origURL: string;
      priority: number;
      publicURL: string;
      secured: boolean;
      thumbURL: string;
      type: string;
      updated: boolean;
    };
    companyId: string;
    created: number;
    default: boolean;
    deleted: boolean;
    externalId: string;
    id: string;
    modified: number;
    name: string;
    phoneNo: string;
    thirdPartyBrandName: string;
    updated: boolean;
    vendorList: [string];
    vendors: [
      {
        accountOwnerId: string;
        active: boolean;
        additionalAddressList: [
          {
            address: string;
            addressLine2: string;
            city: string;
            companyId: string;
            country: string;
            created: number;
            deleted: boolean;
            id: string;
            latitude: number;
            longitude: number;
            modified: number;
            state: string;
            updated: boolean;
            zipCode: string;
          },
        ];
        address: {
          address: string;
          addressLine2: string;
          city: string;
          companyId: string;
          country: string;
          created: number;
          deleted: boolean;
          id: string;
          latitude: number;
          longitude: number;
          modified: number;
          state: string;
          updated: boolean;
          zipCode: string;
        };
        armsLengthType: string;
        assets: [
          {
            active: boolean;
            assetType: string;
            companyId: string;
            created: number;
            deleted: boolean;
            id: string;
            key: string;
            largeURL: string;
            largeX2URL: string;
            mediumURL: string;
            modified: number;
            name: string;
            origURL: string;
            priority: number;
            publicURL: string;
            secured: boolean;
            thumbURL: string;
            type: string;
            updated: boolean;
          },
        ];
        backOrderEnabled: boolean;
        brands: [string];
        companyId: string;
        companyLicenses: [
          {
            companyType: string;
            created: number;
            deleted: boolean;
            id: string;
            licenseExpirationDate: number;
            licenseNumber: string;
            licenseType: string;
            modified: number;
            toDefault: boolean;
            updated: boolean;
          },
        ];
        companyType: string;
        connectedShop: string;
        contactPerson: string;
        created: number;
        createdBy: string;
        credits: number;
        dbaName: string;
        defaultContactId: string;
        defaultPaymentTerm: string;
        deleted: boolean;
        description: string;
        email: string;
        externalId: string;
        fax: string;
        firstName: string;
        id: string;
        importId: string;
        lastName: string;
        licenceType: string;
        licenseExpirationDate: number;
        licenseNumber: string;
        mobileNumber: string;
        modified: number;
        name: string;
        notes: [
          {
            created: number;
            deleted: boolean;
            enableOnFleet: boolean;
            id: string;
            message: string;
            modified: number;
            updated: boolean;
            writerId: string;
            writerName: string;
          },
        ];
        phone: string;
        qbVendorRef: [
          {
            [key: string]: string;
          },
        ];
        relatedEntity: boolean;
        salesPerson: string;
        toDefault: boolean;
        updated: boolean;
        vendorKey: string;
        vendorType: string;
        website: string;
      },
    ];
    website: string;
  };

  export type ObjectID = string;
}
