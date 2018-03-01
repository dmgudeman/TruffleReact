#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
console.log('Hello World');
var fs = require("fs");
Web3 = require('web3');
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
solc = require('solc');
sourceCode = fs.readFileSync('/home/david/Developer/1_BasicTokenSimple/BasicToken.sol').toString();


compiledCode = solc.compile(sourceCode);
console.log('COMPILEDCODE',compiledCode);
contractABI = JSON.parse(compiledCode.contracts[':BasicToken'].interface);
basicTokenContract = web3.eth.contract(contractABI);
byteCode = compiledCode.contracts[':BasicToken'].bytecode;
byteCodeMod = '0x' + byteCode;
web3.personal.unlockAccount('0xc548349582d14fe709dcd9d692f156779acc1792', "1056Patricia");
basicTokenDeployed = basicTokenContract.new({data: byteCodeMod, from: '0xc548349582d14fe709dcd9d692f156779acc1792', gas: 4700000});
console.log(basicTokenDeployed);