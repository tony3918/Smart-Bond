var HDWalletProvider = require("truffle-hdwallet-provider");

//ADD YOUR OWN MNEMONIC (and keep it secret so don't push it to a repo)

var mnemonic = "";

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*",
      from: "0x6259ac218eed8caf47e26246d7e13c1df70165f2",
      gas: 7900000
    }
  },
  compilers: {
    solc: {
      version: "0.4.24" // ex:  "0.4.20". (Default: Truffle's installed solc)
    }
  }
};
