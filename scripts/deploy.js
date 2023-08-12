const hre = require("hardhat");

async function main() {
  
  try {
    const Winner = await hre.ethers.getContractFactory("Winner");

    const contract = await Winner.deploy();

    await contract.waitForDeployment();

    console.log(
      `Contract was deployed to ${contract.target}`
    );
  } catch (error) {
    console.error("Error deploying contract:", error);
    process.exitCode = 1;
  }
}

main();