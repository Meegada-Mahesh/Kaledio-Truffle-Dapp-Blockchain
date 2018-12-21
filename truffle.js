var Web3 = require('web3');

module.exports = {
networks: {
    supplier_node: {
      provider: () => {
        return new Web3.providers.HttpProvider('https://a0byqu4zs6-a0jyo61ft1-rpc.ap-southeast-2.kaleido.io', 0, 'a0kuy7hu2q', 'SGl7n7O35Nef_eLEYxfMBonsCp9Q64_uCGWfEIo1k5g');
      },
      network_id: "*", // Match any network id
      gasPrice: 0,
      gas: 4500000
    },
    shipper_node: {
      provider: () => {
        return new Web3.providers.HttpProvider('https://a0byqu4zs6-a0l74lrhfb-rpc.ap-southeast-2.kaleido.io', 0, 'a0u8jkus2x', 'U_ABFyuMdzibB11a0_fqPSCMTbPxmddEn5J1t1DUCWw');
      },
      network_id: "*", // Match any network id
      gasPrice: 0,
      gas: 4500000
    },
    retailer_node: {
      provider: () => {
        return new Web3.providers.HttpProvider('https://a0byqu4zs6-a0vfn1ute5-rpc.ap-southeast-2.kaleido.io', 0, 'a0cizhddva', 'sfLYCPfMQwh6kVCHH9b25d4viQrkz22kx0ya0g5Hwdc');
      },
      network_id: "*", // Match any network id
      gasPrice: 0,
      gas: 4500000
    }
  }
};