const { ethers } = require("hardhat");
const path = require("path");

function saveFilesInFrontend(contract_address){
    const fs = require('fs');
    const contractsDir = path.join(__dirname,"..",
        "frontend",
        "contracts"
    );

    if (!fs.existsSync(contractsDir)) {
        fs.mkdirSync(contractsDir);
      }

   fs.writeFileSync(
        path.join(contractsDir, "contract-address.json"),
        JSON.stringify({ Calculator: contract_address }, undefined, 2)
      );

      const StudentArtifact = artifacts.readArtifactSync("Student");
    
    fs.writeFileSync(
    path.join(contractsDir, "Student.json"),
    JSON.stringify(StudentArtifact, null, 2));
}

async function main(){
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contract with account address",deployer.address);

    const studentContract = await ethers.deployContract("Student");
    const contract_address  = await studentContract.getAddress();
    console.log("The address of the deployed contract is: ",contract_address);
    saveFilesInFrontend(contract_address);
}


main()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
});