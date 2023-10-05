require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();
// The next line is part of the sample project, you don't need it in your
// project. It imports a Hardhat task definition, that can be used for
// testing the frontend.
require("./tasks/faucet");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: {
        version: "0.8.9",
        settings: {
            optimizer: {
                enabled: true,
                runs: 100000,
            },
        },
    },
    networks: {
        hardhat: {},
        mumbai: {
            url: "https://rpc-mumbai.maticvigil.com",
            // crypto wallet private key
            accounts: [`0x${process.env.PRIVATE_KEY}`],
        },
    },
    etherscan: {
        // chain apikey like (polygon, bsc, ethereum)
        apiKey: process.env.API_KEY,
    },
};
