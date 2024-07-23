const {ethers} = require("hardhat");
const hre = require("hardhat");


async function main() {
  const SymbiosisBadge = await ethers.getContractFactory("SymbiosisBadge");
  const symbiosisBadge = await SymbiosisBadge.deploy("0x4560FECd62B14A463bE44D40fE5Cfd595eEc0113", "https://app.symbiosis.finance/scroll/badge.json");
  await symbiosisBadge.deployed();
  console.log("badge deployed to:", symbiosisBadge.address);

  await hre.run("verify:verify", {
      address: symbiosisBadge.address,
      // address: "0xa5dD4bB28d72a01E57Bbbc483973f8fDD6C7d308",
      constructorArguments: ["0x4560FECd62B14A463bE44D40fE5Cfd595eEc0113", "https://app.symbiosis.finance/scroll/badge.json"],
      contract: "contracts/badge/examples/SymbiosisBadge.sol:SymbiosisBadge"

  });

  // const AttesterProxy = await ethers.getContractFactory("AttesterProxy");
  // const attesterProxy = await AttesterProxy.deploy("0xC47300428b6AD2c7D03BB76D05A176058b47E6B0");
  // await attesterProxy.deployed();
  // console.log("attesterProxy deployed to:", attesterProxy.address);
  //
  // await hre.run("verify:verify", {
  //       address: attesterProxy.address,
  //       constructorArguments: ["0xC47300428b6AD2c7D03BB76D05A176058b47E6B0"],
  //   });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
