const hre = require("hardhat");
const fs = require('fs');

async function main() {
  const contract = await hre.ethers.deployContract("Swisstronik", ["Hello Swisstronik!!"]);
  await contract.waitForDeployment();

  const address = contract.target;
  fs.writeFileSync('./scripts/deployedAddress.txt', address);
  console.log(`Swisstronik contract deployed to ${address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
