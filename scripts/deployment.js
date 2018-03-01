#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
console.log('Hello World');
var fs = require("fs");
Web3 = require('web3');
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
solc = require('solc');
sourceCode = fs.readFileSync('/home/david/Developer/TruffleReact/contracts/SimpleStorage.sol').toString();


compiledCode = solc.compile(sourceCode);
console.log('COMPILEDCODE',compiledCode);
contractABI = JSON.parse(compiledCode.contracts[':SimpleStorage'].interface);
simpleStorageContract = web3.eth.contract(contractABI);
byteCode = compiledCode.contracts[':SimpleStorage'].bytecode;
byteCodeMod = '0x' + byteCode;
web3.personal.unlockAccount('0xc548349582d14fe709dcd9d692f156779acc1792', "1056Patricia");
simpleStorageDeployed = simpleStorageContract.new({data: byteCodeMod, from: '0xc548349582d14fe709dcd9d692f156779acc1792', gas: 4700000});
console.log(simpleStorageDeployed);