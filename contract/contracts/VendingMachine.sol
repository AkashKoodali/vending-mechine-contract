// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract VendingMachine {
    address public owner;
    mapping(address => uint) public donubalances;

    constructor() {
        owner = msg.sender;
        donubalances[address(this)] = 100;
    }

    function getVendingMachineBalance() public view returns (uint) {
        return donubalances[address(this)];
    }

    function restock(uint amount) public {
        require(msg.sender == owner, "Only the owner restock this machine.");
        donubalances[address(this)] += amount;
    }

    function purchase(uint amount) public payable {
        require(
            msg.value >= amount * 2 ether,
            "You must pay at least 2 ether per donut."
        );
        require(
            donubalances[address(this)] >= amount,
            "Not enough donuts in stock to fulfill purchase request."
        );
        donubalances[address(this)] -= amount;
        donubalances[msg.sender] += amount;
    }
}
