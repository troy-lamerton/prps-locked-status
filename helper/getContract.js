const eth = require('./index');

function getContract(contractJsonURL) {
  return fetch(contractJsonURL)
    .then(raw => raw.json())
    .then(data => {
      const abi = data.abi;
      const address = data.networks[1].address; // contract address on mainnet

      return new eth.Contract(abi, address, {
        from: window.coinbase,
      });
    });
}

module.exports = getContract;
