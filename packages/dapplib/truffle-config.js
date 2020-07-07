require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock off tooth warrior ridge remember snake inner knock flock velvet'; 
let testAccounts = [
"0x9b2dfa325cd91b42b830e8de1a0b0890c2c58ee8103bb992230933b0fba3c5a0",
"0x086df2ef5ccc18290e85179545d251fa98c400770b198a376be01bb56c147dc0",
"0x4bf9a712ca467b6bd543ae4e440fcdadaebc95b9c78d8ba1479dcfa35894508a",
"0xa8a3a3fc454275587b8ff2e0247d07de26ae52caec8174254f57904d776dd5cf",
"0x8dd1dcb83a0373c16f368ec0887b23c54f5f00bbc785fd24a227ef599cc70f88",
"0xf7d69a012de88f40c635d209216a6f19b78ed43676ebab0aec4bf74eb3d9a820",
"0x0804587a3e169ad70fdf0c430ff95b9d341a8ef4f386876e55ea6efa11febc09",
"0xcbac647ba068fd44f77afab2f3634c42847ad8b6b853724241b7f21d5443752f",
"0x813104e7675a5fede7bce54edacc2a22943348428db78f168776c2e2387dcfa3",
"0xcfde8fc0b7e4336d30023b0a5977e2521424317edae61eab63d3365ccb4193db"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
