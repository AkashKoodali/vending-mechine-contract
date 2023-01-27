// const Migrations = artifacts.require("Migrations");

// module.exports = function (deployer) {
//     deployer.deploy(Migrations);
// }

const VendingMachine = artifacts.require("VendingMachine");

module.exports = function (deployer) {
    deployer.deploy(VendingMachine);
}