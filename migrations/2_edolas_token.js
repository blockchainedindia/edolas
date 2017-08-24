var SimpleContractRegistry = artifacts.require("SimpleContractRegistry");
var EdolasToken = artifacts.require("EdolasToken");

module.exports = function(deployer) {
  deployer.deploy(SimpleContractRegistry
  ).then(function() {
    console.log("Simple contract registry deployed to: " + SimpleContractRegistry.address);
    return deployer.deploy(EdolasToken);
  }).then(function() {
    console.log("Edolas Token deployed to: " + EdolasToken.address);
    return SimpleContractRegistry.deployed().then(function(instance) {
      return instance.registerContract("digitalGBP", EdolasToken.address);
    });
  }).then(function() {
    console.log("Edolas token registered: " + EdolasToken.address);
  })
};
