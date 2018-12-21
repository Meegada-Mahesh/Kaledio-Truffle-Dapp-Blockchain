var SimpleStorage = artifacts.require("SimpleStorage");

module.exports = function(done) {
    console.log("Getting deployed version of SimpleStorage.... ")
    SimpleStorage.deployed().then(function(instance) {
        console.log("Setting Value to 12345 !!! ");
         return instance.set(12345, {privateFor : ["v7PK1A5K8b9A864lrh524CCTBg5N3B1QDVTA4dIaFCU="]})})
    .then(function(result){
        console.log("Transaction: ",result.tx);
        console.log("Finished !!");
        done();
    }).catch(function(e){
        console.log(e);
        done();
    })
}