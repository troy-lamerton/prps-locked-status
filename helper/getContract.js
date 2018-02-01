const eth = require('./index');
const fetch = require('node-fetch');

function getContract(contractJsonURL) {
  return fetch(contractJsonURL)
    .then(raw => raw.json())
    .then(data => {
      const abi = data.abi;
      const address = data.networks[1].address; // contract address on mainnet

      return eth.contract(abi).at(address);
    });
}

module.exports = getContract;
