
import addressMap from "@/abi/addressMap";
const CONTRACTS = {
    vault:{
        abi:require("./data/vault.json"),
        address:addressMap.vault
    },
    erc20:{
        abi:require("./data/erc20.json"),
    }
};

function getContractByName(name, web3) {
    return new web3.eth.Contract(CONTRACTS[name].abi, CONTRACTS[name].address, {});
}

function getContractByToken(name, address, web3) {
    return new web3.eth.Contract(CONTRACTS[name].abi, address, {});
}

function getContractAddress(name) {
    return CONTRACTS[name].address;
}

export default {
    CONTRACTS,
    getContractByName,
    getContractByToken,
    getContractAddress
};
