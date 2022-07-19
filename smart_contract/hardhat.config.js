require('@nomiclabs/hardhat-waffle')
require('dotenv').config()


module.exports = {
  solidity: "0.8.9",
  networks: {
    rinkeby: {
      url: process.env.ALCHEMY_RINKEBY_URL,
      accounts: [process.env.ACCOUNT_PRIVATE_KEY],
 
    }
  }
};
