import { COVERS } from "../assets";

export const FEEDBACK_URL = "https://noxon.wpmix.net/counter.php";
export const PAYMENT_ADDRESS = "0x873351e707257C28eC6fAB1ADbc850480f6e0633";
export const EVM_ADDRESS_REGEXP = /^0x[A-Fa-f0-9]{40}$/;

export enum SupportedChainId {
  MAINNET = 1,
  BINANCE_SMART_CHAIN = 56,
  // POLYGON = 137,
}

export const bonusAndDiscountContractsByNetworkId = {
//   [SupportedChainId.POLYGON]: "0xd9f89Dec54CbF10011FDc8D9FA06E1f30c3F74d4",
  [SupportedChainId.BINANCE_SMART_CHAIN]: "0xB0A06daCa7F05D86D8fC1e289E08f734398EaE89",
  [SupportedChainId.MAINNET]: PAYMENT_ADDRESS,
};

export interface StatisticUrlsData {
  name: string;
  networkId: SupportedChainId;
  apiKey: string;
  apiDomain: string;
}

export const statisticUrlsDataByNetwork: {
  [key in SupportedChainId]: StatisticUrlsData;
} = {
  // [SupportedChainId.POLYGON]: {
  //   name: "POLYGON",
  //   networkId: SupportedChainId.POLYGON,
  //   apiKey: "4JB4UXHBIE2I5285T18J8SSPUS2M3K7X3V",
  //   apiDomain: "https://api.polygonscan.com",
  // },
  [SupportedChainId.BINANCE_SMART_CHAIN]: {
    name: "BINANCE_SMART_CHAIN",
    networkId: SupportedChainId.BINANCE_SMART_CHAIN,
    apiKey: "2JEI3SQQ8VFNVHFC8XSSNBRNCHZP3632QD",
    apiDomain: "https://api.bscscan.com",
  },
  [SupportedChainId.MAINNET]: {
    name: "MAINNET",
    networkId: SupportedChainId.MAINNET,
    apiKey: "RZ7N3TCPHFIU7Q4KA1V93MZWRN4X7F8HIT",
    apiDomain: "https://api.etherscan.io",
  },
};

export const cashbackTokenAddresses = {
  // [SupportedChainId.POLYGON]: "0x654496319F438A59FEE9557940393cf818753ee9",
  [SupportedChainId.BINANCE_SMART_CHAIN]: "0x92648e4537CdFa1EE743A244465a31AA034B1ce8",
  [SupportedChainId.MAINNET]: "",
};

// 50 calls per minute
export const PRICE_ENDPOINT = "https://noxon.wpmix.net/cursAll.php";

export const FIAT_TICKER = "USD";

// Google analytics Tracking ID
export const GA_TRACKING_ID = "UA-219725401-1";

// Checking address cache
export const SUBSCRIPTION_POSTFIX_KEY = "::subscriptionCheckingDate";
export const ONE_HOUR = 3600000; // in milliseconds
export const ONE_DAY = ONE_HOUR * 24;
export const ONE_MONTH = ONE_DAY * 30;

// https://docs.google.com/spreadsheets/d/1wTTuxXt8n9q7C4NDXqQpI3wpKu1_5bGVmP9Xz0XGSyU/edit#gid=0

export interface Network {
  id: number;
  chainId: string;
  name: string;
  currency: {
    id: string;
    symbol: string;
    binancePurchaseKey: string;
  };
  tokens: {
    [key: string]: {
      address: string;
      id: string;
    };
  };
}

export const NETWORKS: { [key in SupportedChainId]: Network } = {
/* 4: {
    id: 1,
    name: "Rinkeby",
    currency: {
      id: "ethereum",
      symbol: "ETH",
    },
    tokens: {
      usdt: {
        address: "",
        id: "",
      },
    },
  }, */
  [SupportedChainId.MAINNET]: {
    id: 1,
    chainId: `0x${(1).toString(16)}`,
    name: "Ethereum",
    currency: {
      id: "ethereum",
      symbol: "ETH",
      binancePurchaseKey: 'ethereum',
    },
    tokens: {
      usdt: {
        address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
        id: "",
      },
    },
  },
  [SupportedChainId.BINANCE_SMART_CHAIN]: {
    id: 56,
    chainId: `0x${(56).toString(16)}`,
    name: "BSC",
    currency: {
      id: "binancecoin",
      symbol: "BNB",
      binancePurchaseKey: 'BNB',
    },
    tokens: {
      usdt: {
        address: "0x55d398326f99059fF775485246999027B3197955",
        id: "",
      },
    },
  },
  // [SupportedChainId.POLYGON]: {
  //   id: 137,
  //   chainId: `0x${(137).toString(16)}`,
  //   name: "Polygon",
  //   currency: {
  //     id: "aave-polygon-wmatic",
  //     symbol: "MATIC",
  //     binancePurchaseKey: 'polygon-matic',
  //   },
  //   tokens: {
  //     usdt: {
  //       address: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
  //       id: "",
  //     },
  //   },
  // },
};

export interface Product {
  id: string;
  productId: Number;
  name: string;
  status: string;
  demo: string;
  description: string;
  imgSrc: string;
  imgAlt: string;
  promoPage: string;
  promoPageLink: string;
  docsLink?: string;
  license?: string;
  codecanyonLink?: string;
  price: number | undefined; // USD
  howToEarn?: string;
  adminCanEdit?: string;
  videos?: string;
  lables: string[];
  isFee?: boolean;
  freeDesc?: string;
  static_link?: string;
  wp_link?: string;
}

export const PRODUCTS: { [id: string]: Product } = {
  nftstaking: {
    id: "gen1",
    productId: 101,
    name: "NFTStake",
    status: "ready",
    demo: "/examples/gen1.md",
    videos: "#",
    description: "Easy generate a commercial proposal for random company",
    howToEarn: "OutPut - text to sell via email",
    adminCanEdit: "input - description of your company, description o target company",
    imgSrc: COVERS.nftstakCover,
    imgAlt: "NFTStake promo",
    promoPage: "OnOut NFTStake",
    promoPageLink: "https://onout.org/nftstake/",
    docsLink: "",
    codecanyonLink: "",
    lables: ["new"],
    price: 500
  }
};

interface Idea {
  id: string;
  name: string;
  link: string;
  price: number;
}

export const IDEAS: { [id: string]: Idea } = {
  other: {
    id: "other",
    name: "Other",
    link: "https://onout.org/sponsor.md",
    price: 0,
  },
};
