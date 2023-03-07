import getContract from "@/utils/abiUtil";

function judgeToken(rootState) {
    if (!state.token) state.token = getContract.getContractByName('Master', rootState.app.web3)
}

const state = {};
const mutations = {};
const actions = {
    mint({rootState}, value) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.mint().estimateGas({
                from: rootState.app.account,
                value: rootState.app.web3.utils.toWei(value.toString())
            }).then(gas => {
                state.token.methods.mint().send({
                    from: rootState.app.account,
                    gas: parseInt(gas * 1.2),
                    value: rootState.app.web3.utils.toWei(value.toString())
                }).then(res => {
                    let operateLogs = localStorage.getItem("operateLogs") ? JSON.parse(localStorage.getItem("operateLogs")) : []
                    operateLogs.push({
                        name: "mint",
                        from: res.from,
                        to: res.to,
                        gasUsed: res.gasUsed,
                        blockHash: res.blockHash
                    })
                    if (operateLogs.length > 20) {
                        operateLogs.shift()
                    }
                    localStorage.setItem("operateLogs", JSON.stringify(operateLogs))
                    resolve(res)
                })
            }).catch(err => {
                      reject(JSON.parse(err.message.substr(24,err.message.length)).message)
            })
        })
    },
    renounceOwnership({rootState}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.renounceOwnership().estimateGas({
                from: rootState.app.account,
            }).then(gas => {
                state.token.methods.renounceOwnership().send({
                    from: rootState.app.account,
                    gas: parseInt(gas * 1.2)
                }).then(res => {
                    let operateLogs = localStorage.getItem("operateLogs") ? JSON.parse(localStorage.getItem("operateLogs")) : []
                    operateLogs.push({
                        name: "renounceOwnership",
                        from: res.from,
                        to: res.to,
                        gasUsed: res.gasUsed,
                        blockHash: res.blockHash
                    })
                    if (operateLogs.length > 20) {
                        operateLogs.shift()
                    }
                    localStorage.setItem("operateLogs", JSON.stringify(operateLogs))
                    resolve(res)
                })
            }).catch(err => {
                      reject(JSON.parse(err.message.substr(24,err.message.length)).message)
            })
        })
    },
    safeBatchTransferFrom({rootState}, {from, to, ids, amounts, data}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.safeBatchTransferFrom(from, to, ids, amounts, data).estimateGas({
                from: rootState.app.account,
            }).then(gas => {
                state.token.methods.safeBatchTransferFrom(from, to, ids, amounts, data).send({
                    from: rootState.app.account,
                    gas: parseInt(gas * 1.2)
                }).then(res => {
                    let operateLogs = localStorage.getItem("operateLogs") ? JSON.parse(localStorage.getItem("operateLogs")) : []
                    operateLogs.push({
                        name: "safeBatchTransferFrom",
                        from: res.from,
                        to: res.to,
                        gasUsed: res.gasUsed,
                        blockHash: res.blockHash
                    })
                    if (operateLogs.length > 20) {
                        operateLogs.shift()
                    }
                    localStorage.setItem("operateLogs", JSON.stringify(operateLogs))
                    resolve(res)
                })
            }).catch(err => {
                      reject(JSON.parse(err.message.substr(24,err.message.length)).message)
            })
        })
    },
    safeTransferFrom({rootState}, {from, to, id, amount, data}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.safeTransferFrom(from, to, id, amount, data).estimateGas({
                from: rootState.app.account,
            }).then(gas => {
                state.token.methods.safeTransferFrom(from, to, id, amount, data).send({
                    from: rootState.app.account,
                    gas: parseInt(gas * 1.2)
                }).then(res => {
                    let operateLogs = localStorage.getItem("operateLogs") ? JSON.parse(localStorage.getItem("operateLogs")) : []
                    operateLogs.push({
                        name: "safeTransferFrom",
                        from: res.from,
                        to: res.to,
                        gasUsed: res.gasUsed,
                        blockHash: res.blockHash
                    })
                    if (operateLogs.length > 20) {
                        operateLogs.shift()
                    }
                    localStorage.setItem("operateLogs", JSON.stringify(operateLogs))
                    resolve(res)
                })
            }).catch(err => {
                      reject(JSON.parse(err.message.substr(24,err.message.length)).message)
            })
        })
    },
    setApprovalForAll({rootState}, {operator, approved}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.setApprovalForAll(operator, approved).estimateGas({
                from: rootState.app.account,
            }).then(gas => {
                state.token.methods.setApprovalForAll(operator, approved).send({
                    from: rootState.app.account,
                    gas: parseInt(gas * 1.2)
                }).then(res => {
                    let operateLogs = localStorage.getItem("operateLogs") ? JSON.parse(localStorage.getItem("operateLogs")) : []
                    operateLogs.push({
                        name: "setApprovalForAll",
                        from: res.from,
                        to: res.to,
                        gasUsed: res.gasUsed,
                        blockHash: res.blockHash
                    })
                    if (operateLogs.length > 20) {
                        operateLogs.shift()
                    }
                    localStorage.setItem("operateLogs", JSON.stringify(operateLogs))
                    resolve(res)
                })
            }).catch(err => {
                      reject(JSON.parse(err.message.substr(24,err.message.length)).message)
            })
        })
    },
    setBaseURI({rootState}, baseURI_) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.setBaseURI(baseURI_).estimateGas({
                from: rootState.app.account,
            }).then(gas => {
                state.token.methods.setBaseURI(baseURI_).send({
                    from: rootState.app.account,
                    gas: parseInt(gas * 1.2)
                }).then(res => {
                    let operateLogs = localStorage.getItem("operateLogs") ? JSON.parse(localStorage.getItem("operateLogs")) : []
                    operateLogs.push({
                        name: "setBaseURI",
                        from: res.from,
                        to: res.to,
                        gasUsed: res.gasUsed,
                        blockHash: res.blockHash
                    })
                    if (operateLogs.length > 20) {
                        operateLogs.shift()
                    }
                    localStorage.setItem("operateLogs", JSON.stringify(operateLogs))
                    resolve(res)
                })
            }).catch(err => {
                      reject(JSON.parse(err.message.substr(24,err.message.length)).message)
            })
        })
    },
    setfeeReceiver({rootState}, _addr) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.setfeeReceiver(_addr).estimateGas({
                from: rootState.app.account,
            }).then(gas => {
                state.token.methods.setfeeReceiver(_addr).send({
                    from: rootState.app.account,
                    gas: parseInt(gas * 1.2)
                }).then(res => {
                    let operateLogs = localStorage.getItem("operateLogs") ? JSON.parse(localStorage.getItem("operateLogs")) : []
                    operateLogs.push({
                        name: "setfeeReceiver",
                        from: res.from,
                        to: res.to,
                        gasUsed: res.gasUsed,
                        blockHash: res.blockHash
                    })
                    if (operateLogs.length > 20) {
                        operateLogs.shift()
                    }
                    localStorage.setItem("operateLogs", JSON.stringify(operateLogs))
                    resolve(res)
                })
            }).catch(err => {
                      reject(JSON.parse(err.message.substr(24,err.message.length)).message)
            })
        })
    },
    setStake({rootState}, _stake) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.setStake(_stake).estimateGas({
                from: rootState.app.account,
            }).then(gas => {
                state.token.methods.setStake(_stake).send({
                    from: rootState.app.account,
                    gas: parseInt(gas * 1.2)
                }).then(res => {
                    let operateLogs = localStorage.getItem("operateLogs") ? JSON.parse(localStorage.getItem("operateLogs")) : []
                    operateLogs.push({
                        name: "setStake",
                        from: res.from,
                        to: res.to,
                        gasUsed: res.gasUsed,
                        blockHash: res.blockHash
                    })
                    if (operateLogs.length > 20) {
                        operateLogs.shift()
                    }
                    localStorage.setItem("operateLogs", JSON.stringify(operateLogs))
                    resolve(res)
                })
            }).catch(err => {
                      reject(JSON.parse(err.message.substr(24,err.message.length)).message)
            })
        })
    },
    setUserStatus({rootState}, _user) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.setUserStatus(_user).estimateGas({
                from: rootState.app.account,
            }).then(gas => {
                state.token.methods.setUserStatus(_user).send({
                    from: rootState.app.account,
                    gas: parseInt(gas * 1.2)
                }).then(res => {
                    let operateLogs = localStorage.getItem("operateLogs") ? JSON.parse(localStorage.getItem("operateLogs")) : []
                    operateLogs.push({
                        name: "setUserStatus",
                        from: res.from,
                        to: res.to,
                        gasUsed: res.gasUsed,
                        blockHash: res.blockHash
                    })
                    if (operateLogs.length > 20) {
                        operateLogs.shift()
                    }
                    localStorage.setItem("operateLogs", JSON.stringify(operateLogs))
                    resolve(res)
                })
            }).catch(err => {
                      reject(JSON.parse(err.message.substr(24,err.message.length)).message)
            })
        })
    },
    setweth({rootState}, _addr) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.setweth(_addr).estimateGas({
                from: rootState.app.account,
            }).then(gas => {
                state.token.methods.setweth(_addr).send({
                    from: rootState.app.account,
                    gas: parseInt(gas * 1.2)
                }).then(res => {
                    let operateLogs = localStorage.getItem("operateLogs") ? JSON.parse(localStorage.getItem("operateLogs")) : []
                    operateLogs.push({
                        name: "setweth",
                        from: res.from,
                        to: res.to,
                        gasUsed: res.gasUsed,
                        blockHash: res.blockHash
                    })
                    if (operateLogs.length > 20) {
                        operateLogs.shift()
                    }
                    localStorage.setItem("operateLogs", JSON.stringify(operateLogs))
                    resolve(res)
                })
            }).catch(err => {
                      reject(JSON.parse(err.message.substr(24,err.message.length)).message)
            })
        })
    },
    transferOwnership({rootState}, newOwner) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.transferOwnership(newOwner).estimateGas({
                from: rootState.app.account,
            }).then(gas => {
                state.token.methods.transferOwnership(newOwner).send({
                    from: rootState.app.account,
                    gas: parseInt(gas * 1.2)
                }).then(res => {
                    let operateLogs = localStorage.getItem("operateLogs") ? JSON.parse(localStorage.getItem("operateLogs")) : []
                    operateLogs.push({
                        name: "transferOwnership",
                        from: res.from,
                        to: res.to,
                        gasUsed: res.gasUsed,
                        blockHash: res.blockHash
                    })
                    if (operateLogs.length > 20) {
                        operateLogs.shift()
                    }
                    localStorage.setItem("operateLogs", JSON.stringify(operateLogs))
                    resolve(res)
                })
            }).catch(err => {
                      reject(JSON.parse(err.message.substr(24,err.message.length)).message)
            })
        })
    },
    balanceOf({rootState}, {account, id}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.balanceOf(account, id).call().then(res => {
                resolve(res)
            }).catch(err => {
                      reject(JSON.parse(err.message.substr(24,err.message.length)).message)
            })
        })
    },
    balanceOfBatch({rootState}, {accounts, ids}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.balanceOfBatch(accounts, ids).call().then(res => {
                resolve(res)
            }).catch(err => {
                      reject(JSON.parse(err.message.substr(24,err.message.length)).message)
            })
        })
    },
    baseExtension({rootState}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.baseExtension().call().then(res => {
                resolve(res)
            }).catch(err => {
                      reject(JSON.parse(err.message.substr(24,err.message.length)).message)
            })
        })
    },
    baseURI({rootState}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.baseURI().call().then(res => {
                resolve(res)
            }).catch(err => {
                      reject(JSON.parse(err.message.substr(24,err.message.length)).message)
            })
        })
    },
    currentId({rootState}, param0) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.currentId(param0).call().then(res => {
                resolve(res)
            }).catch(err => {
                      reject(JSON.parse(err.message.substr(24,err.message.length)).message)
            })
        })
    },
    currentTokenId({rootState}, _user) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.currentTokenId(_user).call().then(res => {
                resolve(res)
            }).catch(err => {
                      reject(JSON.parse(err.message.substr(24,err.message.length)).message)
            })
        })
    },
    isApprovedForAll({rootState}, {account, operator}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.isApprovedForAll(account, operator).call().then(res => {
                resolve(res)
            }).catch(err => {
                      reject(JSON.parse(err.message.substr(24,err.message.length)).message)
            })
        })
    },
    name({rootState}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.name().call().then(res => {
                resolve(res)
            }).catch(err => {
                      reject(JSON.parse(err.message.substr(24,err.message.length)).message)
            })
        })
    },
    owner({rootState}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.owner().call().then(res => {
                resolve(res)
            }).catch(err => {
                      reject(JSON.parse(err.message.substr(24,err.message.length)).message)
            })
        })
    },
    stakeAddr({rootState}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.stakeAddr().call().then(res => {
                resolve(res)
            }).catch(err => {
                      reject(JSON.parse(err.message.substr(24,err.message.length)).message)
            })
        })
    },
    supportsInterface({rootState}, interfaceId) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.supportsInterface(interfaceId).call().then(res => {
                resolve(res)
            }).catch(err => {
                      reject(JSON.parse(err.message.substr(24,err.message.length)).message)
            })
        })
    },
    symbol({rootState}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.symbol().call().then(res => {
                resolve(res)
            }).catch(err => {
                      reject(JSON.parse(err.message.substr(24,err.message.length)).message)
            })
        })
    },
    uri({rootState}, _tokenId) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.uri(_tokenId).call().then(res => {
                resolve(res)
            }).catch(err => {
                      reject(JSON.parse(err.message.substr(24,err.message.length)).message)
            })
        })
    },
    userStatus({rootState}, param0) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.userStatus(param0).call().then(res => {
                resolve(res)
            }).catch(err => {
                      reject(JSON.parse(err.message.substr(24,err.message.length)).message)
            })
        })
    },
    weth({rootState}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.weth().call().then(res => {
                resolve(res)
            }).catch(err => {
                      reject(JSON.parse(err.message.substr(24,err.message.length)).message)
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
