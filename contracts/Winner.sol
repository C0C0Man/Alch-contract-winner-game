// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Winner {
    address public contractAAddress = 0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502;
    ContractA public contractA;

    constructor() {
        contractA = ContractA(contractAAddress);
    }

    function callContractAAttempt() public {
        contractA.attempt();
    }
}

interface ContractA {
    function attempt() external;
}
