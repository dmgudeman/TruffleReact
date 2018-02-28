pragma solidity ^0.4.18;
import 'zeppelin-solidity/contracts/token/ERC20/MintableToken.sol';

contract FreeExchange3 is MintableToken {
    string public name = "FreeExchange3";
    string public symbol = "FXC";
    uint public decimals = 2;
    uint public INITIAL_SUPPLY = 10000 * (10 ** decimals);

    function FreeExchange3() public {
        totalSupply_ = INITIAL_SUPPLY;
        balances[msg.sender] = INITIAL_SUPPLY;
    }
}