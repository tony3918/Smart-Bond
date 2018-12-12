var SimpleBond = artifacts.require('contracts/SimpleBond.sol');

module.exports = async function(deployer, network, accounts) {

  let devAddress = '0x1900a41f2777ab70aad2074e3f4b9c5429c7f243'

  let name = "Simple Bond"
  let par = 1000
  let parDecimals = 0
  let coupon = 5
  let term = 31557600 * 2
  let cap = 1000
  let timesToRedeem = 4
  let tkn = 0x0
  let limit = 50

  if (network == "main") {


  } else if (network == "rinkeby" || network == "ropsten") {

    deployer.deploy(SimpleBond, name, par, parDecimals, coupon,
                    term, cap, timesToRedeem, tkn, limit).then(function() {



    })

  } else if (network == "development") {

    deployer.deploy(SimpleBond, name, par, parDecimals, coupon,
                    term, cap, timesToRedeem, tkn, limit, {from: accounts[0]}).then(function() {

      console.log("Bond deployed!")

    })

  }

}
