require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    lineasepolia: {
      url: "https://linea-sepolia.g.alchemy.com/v2/Lm1fz0HPP8VhrWHVuZbQTs-mM_Vz8fAo",
      accounts: [
        "2a84cc22433269c159b894b41684e6799dca9e62d0c91fa5b1934b5365930c56",
      ],
    },
  },
};
