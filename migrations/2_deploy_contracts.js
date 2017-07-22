var ConvertLib = artifacts.require("./ConvertLib.sol");
var MetaCoin = artifacts.require("./MetaCoin.sol");
var SimpleAuction = artifacts.require("./simpleAuction.sol");
var P2pinsure = artifacts.require("./p2pinsure.sol");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, MetaCoin);
  deployer.deploy(MetaCoin);
  deployer.deploy(SimpleAuction);
  deployer.deploy(P2pinsure);
};
