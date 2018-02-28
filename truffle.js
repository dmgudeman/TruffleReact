module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      host: "localhost",
      port: 8545,
      network_id: "3",
      gas: 4700000
    },
    production: {
      host: "localhost",
      port: 8545,
      network_id: "1", // LIVE
      gas: 4700000
    },
  }
};