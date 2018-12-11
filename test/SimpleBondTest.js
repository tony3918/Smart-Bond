const SimpleBond = artifacts.require("contracts/SimpleBond.sol");

const assertFail = require("./helpers/assertFail");

const increaseTime = require('./helpers/increaseTime');

contract('SimpleBond', function(accounts) {

    let bond;
    let name = "Simple Bond"
    let par = 1000
    let parDecimals = 0
    let coupon = 5
    let term = 31557600 * 2
    let cap = 1000
    let timesToRedeem = 4
    let tkn = 0x0

    let transferrableBonds = [1,2,3,4,5,6,7,8,9,10]

    let redeemed = [1,2,3,4,5]

    beforeEach(async () => {

      bond = await SimpleBond.new(name, par, parDecimals, coupon,
                        term, cap, timesToRedeem, tkn, {from: accounts[0]});

      await bond.donate({from: accounts[0], value: 100})

      await bond.mintBond(accounts[1], 100, {from: accounts[0]});

    });

    it("Transfer bonds", async () => {

      await bond.transfer(accounts[2], transferrableBonds, {from: accounts[1]})

      assert.equal(await bond.getBondsNumber(accounts[2]), 10)

      for (var i = 0; i < transferrableBonds.length; i++) {

        assert.equal(await bond.getOwner(i + 1), accounts[2])

      }

    })

    it("Redeem coupons", async () => {

      await increaseTime.increaseTimeTo
        (web3.eth.getBlock(web3.eth.blockNumber).timestamp + increaseTime.duration.years(1));

      await bond.redeemCoupons(redeemed)

    })

})
