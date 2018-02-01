const eth = require('../helper/index');
const getContractInstance = require('../helper/getContract');

function findLockedPrps(address) {
  getContractInstance(
    'https://cdn.rawgit.com/nionis/purpose/master/build/contracts/Hodler.json',
  ).then(contract => {
    let holdItems = new Array(200).fill(true);
    holdItems = holdItems.map((_, index) => {
      return contract.methods
        .getItem(window.coinbase, index)
        .call()
        .then(result => {
          if (result[2]) {
            const holdedValue = window.w3.utils.toBN(result[2]).toString();
            this.setState({
              balance: window.w3.utils.fromWei(holdedValue, 'ether'),
            });
          }
        })
        .then(() => {
          if (index % 10 === 0) console.log(index);
        });
    });
    return Promise.all(holdItems);
  });
}

module.exports = findLockedPrps;
