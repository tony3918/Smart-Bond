var SimpleBond = artifacts.require("contracts/SimpleBond.sol");
var BasicToken = artifacts.require("contracts/zeppelin/ERC20/BasicToken.sol");

module.exports = async function(deployer, network, accounts) {
  deployer
    .deploy(BasicToken)
    .then(() => BasicToken.deployed())
    .then(instance => console.log(instance.address)); // 0xd9d64b7DC034fAfDbA5DC2902875A67b5d586420

  let devAddress = "0x1900a41f2777ab70aad2074e3f4b9c5429c7f243";

  let name = "Simple Bond";
  let par = 1000;
  let parDecimals = 0;
  let coupon = 5;
  let term = 31557600 * 2;
  let cap = 1000;
  let timesToRedeem = 4;
  let tkn = 0x0000000000000000000000000000000000000000;
  let limit = 50;

  if (network == "main") {
  } else if (network == "rinkeby" || network == "ropsten") {
    deployer
      .deploy(
        SimpleBond,
        name,
        par,
        parDecimals,
        coupon,
        term,
        cap,
        timesToRedeem,
        tkn,
        limit
      )
      .then(function() {});
  } else if (network == "development") {
    deployer
      .deploy(
        SimpleBond,
        name,
        par,
        parDecimals,
        coupon,
        term,
        cap,
        timesToRedeem,
        tkn,
        limit,
        { from: accounts[0] }
      )
      .then(function() {
        console.log("Bond deployed!");
      });
  }
};
