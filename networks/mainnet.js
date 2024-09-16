const types = require('../polkadot-types.json');
const metadata = require('./metadata/mainnet-metadata.json');

module.exports = {
  blockchain: 'Substrate',
  network: 'peaq-network',
  nodeAddress: 'wss://peaq.api.onfinality.io/public-ws', // This expects you have a synced local node running!
  ss58Format: 42,
  properties: {
    ss58Format: 42,
    tokenDecimals: 18,
    tokenSymbol: 'PEAQ',
    poaModule: {
      treasury: '5EYCAe5ijiYfyeZ2JJCGq56LmPyNRAKzpG4QkoQkkQNB5e6Z',
    },
  },
  genesis: '0xd2a5d385932d1f650dae03ef8e2748983779ee342c614f80854d32b8cd8fa48c',
  name: 'peaq-network',
  specName: 'peaq-node',
  // Next 2 fields need to change whenever they change on the chain.
  specVersion: 101,
  transactionVersion: 1,
  types,
  metadataRpc: metadata.metadataRpc,
};
