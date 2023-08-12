
const hre = require("hardhat");

const CONTRACT_B_ADDR = "0x804B8d77f999D3aC032f307301024d1f7F37C361"; // Address of ContractB

async function main() {
  try {
    const Winner = await hre.ethers.getContractFactory("Winner");
    const contract = await Winner.attach(CONTRACT_B_ADDR);

    const tx = await contract.callContractAAttempt();

    await tx.wait();

  } catch (error) {
    console.error("Error interacting with contract:", error);
    process.exitCode = 1;
  }
}

main();
