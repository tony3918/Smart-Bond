var Web3 = require('web3');
var utils = require('ethereumjs-util')
var BigNumber = require('bignumber.js')

var bondABI = require('../abi/SimpleBond.js')

var web3

var defaultGas = 6500000

if (typeof web3 !== 'undefined') {

    web3 = new Web3(web3.currentProvider);

} else {

    // Set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

}

//GENERAL UTILS

async function getCurrentBlockNr(callback) {

  web3.eth.getBlockNumber(function (err, blockNr) {

    if (err != undefined && err != null) return callback(err, undefined)

    return callback(undefined, blockNr)

  })

}

//GET CONTRACTS INSTANCES

async function getContract(pubKey, name, _addr) {

  if (name.toLowerCase() == 'simpleBond') {

    var bond = new web3.eth.Contract(bondABI.simpleBond.abi, _addr,
      {from: pubKey.toString(), gas: defaultGas});

    return bond

  } else return undefined

}

// BOND

async function getTerm(bond) {

  var term

  await bond.methods.getTerm().call(function(err, result) {

    if (err != undefined) {term = undefined; console.log(err)}

    else term = result

  });

  return term

}

async function getMaturity(bond) {

  var maturity

  await bond.methods.getMaturity().call(function(err, result) {

    if (err != undefined) {maturity = undefined; console.log(err)}

    else maturity = result

  });

  return maturity

}

async function getCouponRate(bond) {

  var rate

  await bond.methods.getCouponRate().call(function(err, result) {

    if (err != undefined) {rate = undefined; console.log(err)}

    else rate = result

  });

  return rate

}

async function getParValue(bond) {

  var par

  await bond.methods.getParValue().call(function(err, result) {

    if (err != undefined) {par = undefined; console.log(err)}

    else par = result

  });

  return par

}

async function getRemainingCoupons(bond, idBond) {

  var remaining

  await bond.methods.getRemainingCoupons(idBond).call(function(err, result) {

    if (err != undefined) {remaining = undefined; console.log(err)}

    else remaining = result

  });

  return remaining

}

async function getSimpleInterest(bond) {

  var interest

  await bond.methods.getSimpleInterest().call(function(err, result) {

    if (err != undefined) {interest = undefined; console.log(err)}

    else interest = result

  });

  return interest

}

module.exports = {

  web3,
  getCurrentBlockNr,
  getContract,
  getTerm,
  getMaturity,
  getCouponRate,
  getParValue,
  getRemainingCoupons,
  getSimpleInterest

}
