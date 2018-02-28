pragma solidity ^0.4.18;
//import './FreeExchange3.sol';
import 'zeppelin-solidity/contracts/token/ERC20/MintableToken.sol';

contract SimpleStorage is MintableToken {
  uint storedData;
  uint storedToken;
  address public manager;
  uint public minimumContribution;

  function SimpleStorage() public {
    manager = msg.sender;
  }

  function set(uint x) public {
    storedData = x;
  }

  function get() public view returns (uint) {
    return storedData;
  }

  function getTokenBalance() public view returns (uint) {
    return storedToken;
  }
}
