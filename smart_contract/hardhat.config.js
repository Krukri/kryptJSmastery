require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/f2z8FrKDVcgWLcHfjpWsWAsLIM8Lhu-v",
      accounts: [
        "366aec5ab434d43d203ba91100401a1911156c7b2202b689d2b236f6df0c50e0",
      ],
    },
  },
};
