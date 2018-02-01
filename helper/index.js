const Eth = require('ethjs');
const eth = new Eth(
  new Eth.HttpProvider('https://mainnet.infura.io/iglyUDJqyhlE1Ziijl5H'),
);

module.exports = eth;
