const eth = require('../helper/index');
const getContractInstance = require('../helper/getContract');

function findLockedPrps(lockedByAddress) {
  getContractInstance(
    'https://cdn.rawgit.com/nionis/purpose/master/build/contracts/Hodler.json',
  ).then(contract => {
    let holdItems = new Array(200).fill(true);
    holdItems = holdItems.map((_, index) => {
      return contract
        .getItem(lockedByAddress, index)
        .then(result => {
          if (result[2]) {
            const holdedValue = eth.BN(result[2]).toString();
            this.setState({
              balance: eth.fromWei(holdedValue, 'ether'),
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
