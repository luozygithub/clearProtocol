const OptionMainAddr = '0x7DA9A573939bcd9FAc5574c2b3eBf2B0842D2434';
const OptionMakerAddr = '0x892230A7A340821aef31EF7530DA17C5E8bFB134';
const NotesAddr = '0x98fD271606D037A3892EabC1774fA82dB3924584';
const NoteInvestAddr = '0x06CF4874D1721837e228A2660Ea96999ee0ac6c3';
const NFTOption = '0x44c6A48958783D84631053ace30A2E1b726A7d60';
const NFTOptionMaker = '0xe2D0f3EB7eE922EfB5D90A373e2B075B3537e308';

const Charms1 = OptionMainAddr + OptionMakerAddr + 'abc';
const Network = {
    '0x61': {
        chainId: '0x61',
        chainType: '2',
        chainName: 'Binance Smart Chain Testnet',
        shortName: 'BSC',
        /**
         * https://data-seed-prebsc-1-s1.binance.org:8545/
https://data-seed-prebsc-2-s1.binance.org:8545/
https://data-seed-prebsc-1-s2.binance.org:8545/
https://data-seed-prebsc-2-s2.binance.org:8545/
https://data-seed-prebsc-1-s3.binance.org:8545/
https://data-seed-prebsc-2-s3.binance.org:8545/
         */
        rpcUrls: ['https://data-seed-prebsc-2-s3.binance.org:8545/'],
        blockExplorerUrls: ['https://testnet.bscscan.com'],
        nativeCurrency: {
            name: 'BNB',
            symbol: 'BNB',
            decimals: 18,
        },
        payToken: {
            name: 'USDC',
            address: '0x16227D60f7a0e586C66B005219dfc887D13C9531',
            decimals: 6,
        },
    },
    '0x66eed': {
        chainId: '0x66eed',
        chainName: 'Arbitrum goerli',
        shortName: 'goerli ARB',
        chainType: '3',
        rpcUrls: ['https://goerli-rollup.arbitrum.io/rpc'],
        blockExplorerUrls: ['https://testnet.arbiscan.io'],
        nativeCurrency: {
            name: 'ETH',
            symbol: 'ETH',
            decimals: 18,
        },
        payToken: {
            name: 'USDT',
            address: '0x0d88a6b8bF9C6E97373FB9C60E2eb2B4865d021f',
            decimals: 18,
        },
    },
};
export { OptionMainAddr, OptionMakerAddr, NotesAddr, NFTOption, NFTOptionMaker,  Network, NoteInvestAddr, Charms1 };
