Web3 = require('web3')
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
solc = require('solc') 
sourceCode = fs.readFileSync('contracts/SimpleStorage.sol').toString()
