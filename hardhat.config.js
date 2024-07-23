require("dotenv").config();
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");



const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY || "";
const PRIVATE_KEY = process.env.PRIVATE_KEY || "";
const SCAN_API_KEY = process.env.SCAN_API_KEY || "";

module.exports = {
  zksolc: {
    version: "1.3.13",
    compilerSource: "binary",
    settings: {},
  },
  solidity: {
    compilers: [{
      version: "0.8.19",
      settings: {
        optimizer: {
          enabled: true,
          runs: 2000,
        },
      },
    },
      // {
      //     version: "0.8.7",
      //     settings: {
      //         optimizer: {
      //             enabled: true,
      //             runs: 2000,
      //         },
      //     },
      // },
      {
        version: "0.5.16",
        settings: {},
      },
      {
        version: "0.4.21",
        settings: {},
      },
      {
        version: "0.6.6",
        settings: {},
      },
      {
        version: "0.8.4",
        settings: {},
      },
      {
        version: "0.8.12",
        settings: {},
      },
    ],
    overrides: {
      "contracts/test/unidex-periphery/UniswapV2Router02.sol": {
        version: "0.6.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000,
          },
        },
      },
    }
  },
  networks: {
    zkMainnet: {
      url: "https://mainnet.era.zksync.io",
      accounts: [`${PRIVATE_KEY}`],
      ethNetwork: `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      zksync: true,
      verifyURL: 'https://zksync2-mainnet-explorer.zksync.io/contract_verification'
    },
    boba_bnb: {
      url: `https://bnb.boba.network/`,
      accounts: [`${PRIVATE_KEY}`],
    },
    boba_eth: {
      url: `https://mainnet.boba.network/`,
      // url: 'https://lightning-replica.boba.network/',
      accounts: [`${PRIVATE_KEY}`],
      // gasPrice: 7250000000,
      // blockGasLimit: 11000000,
    },
    boba_avax: {
      url: `https://avax.boba.network/`,
      accounts: [`${PRIVATE_KEY}`],
    },
    eth: {
      // url: `https://rpc.symbiosis.finance/1`,
      url: `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`${PRIVATE_KEY}`],
    },
    bsc: {
      url: `https://bsc-dataseed3.binance.org/`,
      // url: `https://speedy-nodes-nyc.moralis.io/${MORALIS_API_KEY}/bsc/mainnet`,
      accounts: [`${PRIVATE_KEY}`],
    },
    optimism: {
      url: `https://opt-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: [`${PRIVATE_KEY}`],
    },
    base: {
      url: `https://mainnet.base.org/`,
      accounts: [`${PRIVATE_KEY}`],
    },
    gravity: {
      url: `https://rpc.gravity.xyz/`,
      accounts: [`${PRIVATE_KEY}`],
    },
    metis: {
      url: `https://andromeda.metis.io/?owner=1088`,
      accounts: [`${PRIVATE_KEY}`],
    },
    bahamut: {
      url: `https://rpc1.bahamut.io`,
      // url: `https://bahamut.publicnode.com`,
      accounts: [`${PRIVATE_KEY}`],
      // blockGasLimit: 12450000,
      // gasPrice: 1000000000000,
      // maxPriorityFeePerGas: 100000000000,
    },
    zora: {
      url: `https://zora.rpc.thirdweb.com`,
      accounts: [`${PRIVATE_KEY}`],
      gas: 10000000,
      gasPrice: 2000000000,
    },
    avalanche: {
      // url: `https://rpc.symbiosis.finance/43114`,
      url: 'https://api.avax.network/ext/bc/C/rpc',
      accounts: [`${PRIVATE_KEY}`],
    },
    arb: {
      url: `https://arb1.arbitrum.io/rpc`,
      accounts: [`${PRIVATE_KEY}`],
    },
    kava: {
      url: `https://evm.kava.io/`,
      accounts: [`${PRIVATE_KEY}`],
    },
    core_dao: {
      url: `https://rpc.coredao.org/`,
      accounts: [`${PRIVATE_KEY}`],
    },
    linea: {
      url: `https://linea-mainnet.infura.io/v3/40d9adf1363d40cc8c0e9e16e56cc008`,
      accounts: [`${PRIVATE_KEY}`],
    },
    mantle: {
      url: `https://rpc.mantle.xyz/`,
      accounts: [`${PRIVATE_KEY}`],
    },
    manta: {
      url: `https://pacific-rpc.manta.network/http`,
      accounts: [`${PRIVATE_KEY}`],
    },
    frax: {
      url: `https://rpc.frax.com`,
      accounts: [`${PRIVATE_KEY}`],
    },
    polygon: {
      url: `https://polygon-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [`${PRIVATE_KEY}`],
    },
    mode: {
      url: `https://mainnet.mode.network/`,
      accounts: [`${PRIVATE_KEY}`],
    },
    polygon_zk_mainnet: {
      url: `https://polygon-zkevm.drpc.org`,
      gas: 60000000,
      accounts: [`${PRIVATE_KEY}`],
    },
    merlin: {
      url: `https://rpc.merlinchain.io `,
      accounts: [`${PRIVATE_KEY}`],
    },
    arb_nova: {
      url: `https://nova.arbitrum.io/rpc`,
      accounts: [`${PRIVATE_KEY}`],
    },
    scroll: {
      url: `https://mainnet-rpc.scroll.io/`,
      accounts: [`${PRIVATE_KEY}`],
    },
    zkMainnet: {
      url: "https://mainnet.era.zksync.io",
      accounts: [`${PRIVATE_KEY}`],
      ethNetwork: "https://eth-mainnet.g.alchemy.com/v2/j6tR9f7MdKYBMp-551iau0xuz0Eg8pcF",
      zksync: true,
      verifyURL: 'https://zksync2-mainnet-explorer.zksync.io/contract_verification'
    },
    telos: {
      url: "https://mainnet.telos.net/evm",
      accounts: [`${PRIVATE_KEY}`],
    },
    zklink: {
      url: "https://rpc.zklink.io",
      accounts: [`${PRIVATE_KEY}`],
    },
    cronos: {
      url: "https://evm.cronos.org/",
      accounts: [`${PRIVATE_KEY}`],
    },
    taiko: {
      url: "https://rpc.mainnet.taiko.xyz/",
      accounts: [`${PRIVATE_KEY}`],
    },
    zeta: {
      // url: "https://zetachain-mainnet.blastapi.io/96b1e233-bc6b-48e7-ba45-8d97979af805",
      url: "https://zetachain-evm.blockpi.network/v1/rpc/public",
      allowUnlimitedContractSize: true,
      accounts: [`${PRIVATE_KEY}`],
    },
    sei: {
      url: "https://evm-rpc.sei-apis.com",
      accounts: [`${PRIVATE_KEY}`],
    },
    rootstock: {
      url: "https://public-node.rsk.co",
      accounts: [`${PRIVATE_KEY}`],
    },
    blast: {
      url: "https://boldest-distinguished-forest.blast-mainnet.quiknode.pro/cac5d32e39ebdfe0a5c3b44d5a979fa3573ec90d/",
      accounts: [`${PRIVATE_KEY}`],
    },
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      // url: `https://ethereum-sepolia-rpc.publicnode.com`,
      accounts: [`${PRIVATE_KEY}`],
    },
    bsct: {
      url: `https://data-seed-prebsc-1-s1.binance.org:8545/`,
      accounts: [`${PRIVATE_KEY}`],
    },
    fuji: {
      url: `https://api.avax-test.network/ext/bc/C/rpc`,
      accounts: [`${PRIVATE_KEY}`],
    },
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [`${PRIVATE_KEY}`],
    },
    hardhat: {
      gas: 10000000000,
      blockGasLimit: 10000000000,
      allowUnlimitedContractSize: true,
      // gasLimit: 300000000
    },
    fork: {
      url: `http://127.0.0.1:8545/`,
    },
  },
  etherscan: {
    // apiKey: SCAN_API_KEY,
    apiKey: {
      mainnet: SCAN_API_KEY,
      'boba_eth': SCAN_API_KEY,
      'bsc': SCAN_API_KEY,
      arbitrumOne: SCAN_API_KEY,
      frax: SCAN_API_KEY,
      'boba_avax': 'NO_KEY_REQUIRED',
      'boba_bnb': 'NO_KEY_REQUIRED',
      'kava': 'NO_KEY_REQUIRED',
      'polygon_zk_mainnet': SCAN_API_KEY,
      blast: SCAN_API_KEY,
      optimisticEthereum: SCAN_API_KEY,
      avalanche: SCAN_API_KEY,
      'base': SCAN_API_KEY,
      polygon: SCAN_API_KEY,
      'linea': SCAN_API_KEY,
      'mantle': 'NO_KEY_REQUIRED',
      'arb_nova': SCAN_API_KEY,
      'core_dao': SCAN_API_KEY,
      'scroll': SCAN_API_KEY,
      'bahamut': SCAN_API_KEY,
      'mode': SCAN_API_KEY,
      'manta': SCAN_API_KEY,
      'sepolia': SCAN_API_KEY,
      taiko: SCAN_API_KEY,
      sei: SCAN_API_KEY,
      cronos: SCAN_API_KEY,
    },
    customChains: [
      {
        network: "cronos",
        chainId: 25,
        urls: {
          apiURL:
            "https://explorer-api.cronos.org/mainnet/api/v1/hardhat/contract?apikey=" +
            SCAN_API_KEY,
          browserURL: "https://explorer.cronos.org",
        },
      },
      {
        network: "cronos",
        chainId: 25,
        urls: {
          apiURL:
            "https://explorer-api.cronos.org/mainnet/api/v1/hardhat/contract?apikey=" +
            SCAN_API_KEY,
          browserURL: "https://explorer.cronos.org",
        },
      },            {
        network: "frax",
        chainId: 252,
        urls: {
          apiURL: 'https://api.fraxscan.com/api',
          browserURL: "https://fraxscan.com",
        },
      },
      {
        network: 'linea',
        chainId: 59144,
        urls: {
          apiURL: 'https://api.lineascan.build/api',
          browserURL: 'https://lineascan.build/',
        },
      },
      {
        network: 'sei',
        chainId: 1329,
        urls: {
          apiURL: 'https://seitrace.com/pacific-1/api',
          browserURL: 'https://seitrace.com/',
        },
      },
      {
        network: 'taiko',
        chainId: 167000,
        urls: {
          apiURL: 'https://blockscoutapi.hekla.taiko.xyz/api',
          browserURL: 'https://taikoscan.network/',
        },
      },
      {
        network: 'core_dao',
        chainId: 1116,
        urls: {
          apiURL: "https://openapi.coredao.org/api",
          browserURL: "https://scan.coredao.org/"
        }
      },
      {
        network: 'blast',
        chainId: 81457,
        urls: {
          apiURL: 'https://api.blastscan.io/api',
          browserURL: 'https://blastscan.io/',
        },
      },
      {
        network: 'manta',
        chainId: 169,
        urls: {
          apiURL: 'https://pacific-explorer.manta.network/api',
          browserURL: 'https://pacific-explorer.manta.network/',
        },
      },
      {
        network: 'arb_nova',
        chainId: 42170,
        urls: {
          apiURL: 'https://api-nova.arbiscan.io/api',
          browserURL: 'https://nova.arbiscan.io',
        },
      },
      {
        network: 'scroll',
        chainId: 534352,
        urls: {
          apiURL: 'https://api.scrollscan.com/api',
          browserURL: 'https://api.scrollscan.com',
        },
      },
      {
        network: 'bahamut',
        chainId: 5165,
        urls: {
          apiURL: 'https://www.ftnscan.com/api',
          browserURL: 'https://www.ftnscan.com/',
        },
      },
      {
        network: 'mode',
        chainId: 34443,
        urls: {
          apiURL: 'https://explorer.mode.network/api',
          browserURL: 'https://explorer.mode.network/',
        },
      },
      {
        network: "mantle",
        chainId: 5000,
        urls: {
          apiURL: "https://explorer.mantle.xyz/api",
          browserURL: "https://explorer.mantle.xyz/"
        }
      },
      {
        network: 'base',
        chainId: 8453,
        urls: {
          apiURL: 'https://api.basescan.org/api',
          browserURL: 'https://basescan.org',
        },
      },
      {
        network: 'boba_eth',
        chainId: 288,
        urls: {
          apiURL: 'https://api.routescan.io/v2/network/mainnet/evm/288/etherscan',
          browserURL: 'https://boba.routescan.io',
        },
      },
      {
        network: 'polygon_zk_mainnet',
        chainId: 1101,
        urls: {
          apiURL: 'https://api-zkevm.polygonscan.com/api',
          browserURL: 'https://zkevm.polygonscan.com',
        },
      },
      {
        network: 'boba_avax',
        chainId: 43288,
        urls: {
          apiURL: 'https://blockexplorer.avax.boba.network/api',
          browserURL: 'https://blockexplorer.avax.boba.network/',
        },
      },
      {
        network: 'boba_bnb',
        chainId: 56288,
        urls: {
          apiURL: 'https://api.routescan.io/v2/network/mainnet/evm/56288/etherscan',
          browserURL: 'https://bnb.bobascan.com',
        },
      },
      {
        network: 'kava',
        chainId: 2222,
        urls: {
          apiURL: 'https://kavascan.com/api',
          browserURL: 'https://kavascan.com',
        },
      },
    ],
  },
  contractSizer: {
    alphaSort: true,
    runOnCompile: true,
    disambiguatePaths: false,
  },
  docgen: {
    path: "./docs-docgen",
    clear: true,
    runOnCompile: true,
  },
  mocha: {
    timeout: 100000
  },
  gasReporter: {
    enabled: true
  }
};