var SimpleStorage = artifacts.require("SimpleStorage");

module.exports = function(deployer) {
    deployer.deploy(SimpleStorage,123,{privateFor:["v7PK1A5K8b9A864lrh524CCTBg5N3B1QDVTA4dIaFCU="]})
}