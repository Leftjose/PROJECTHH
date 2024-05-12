/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
};

require("@nomiclabs/hardhat-waffle");

const endpointUrl = "END_POINTURL";
const privateKey = "PRIVATE_KEY";
module.exports = {
  solidity: "0.8.21",
  networks: {
    sepolia: {
      url: endpointUrl,
      accounts: [privateKey],
    },
  },
};