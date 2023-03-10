import getContract from "@/abi/index.js";

function judgeToken(rootState) {
    if (!state.token) state.token = getContract.getContractByName('CLP', rootState.app.web3)
}

const state = {};
const mutations = {};
const actions = {
    mint({rootState}, {_usdAmount}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.mint(_usdAmount).estimateGas({
                from: rootState.app.account,
            }).then(gas => {
                state.token.methods.mint(_usdAmount).send({
                    from: rootState.app.account,
                    gas: parseInt(gas * 1.2)
                }).then(res => {

                    resolve(res)
                })
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    burn({rootState}, {_clpAmount}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.burn(_clpAmount).estimateGas({
                from: rootState.app.account,
            }).then(gas => {
                state.token.methods.burn(_clpAmount).send({
                    from: rootState.app.account,
                    gas: parseInt(gas * 1.2)
                }).then(res => {

                    resolve(res)
                })
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    totalSupply({rootState}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.totalSupply().call().then(res => {
                resolve(res)
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    balanceOf({rootState}, {account}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.balanceOf(account).call().then(res => {
                resolve(res)
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
}
export default {
    namespaced: true,
    mutations,
    state,
    actions
}
