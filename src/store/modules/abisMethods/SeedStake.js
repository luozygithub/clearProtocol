import getContract from "@/utils/abiUtil";

function judgeToken(rootState) {
    if (!state.token) state.token = getContract.getContractByName('SeedStake', rootState.app.web3)
}

const state = {};
const mutations = {};
const actions = {
    claimRewards({rootState}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.claimRewards().estimateGas({
                from: rootState.app.account,
            }).then(gas => {
                state.token.methods.claimRewards().send({
                    from: rootState.app.account,
                    gas: parseInt(gas * 1.2)
                }).then(res => {
                    let operateLogs = localStorage.getItem("operateLogs") ? JSON.parse(localStorage.getItem("operateLogs")) : []
                    operateLogs.push({
                        name: "claimRewards",
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
    inviteExt({rootState}, {from, to}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.inviteExt(from, to).estimateGas({
                from: rootState.app.account,
            }).then(gas => {
                state.token.methods.inviteExt(from, to).send({
                    from: rootState.app.account,
                    gas: parseInt(gas * 1.2)
                }).then(res => {
                    let operateLogs = localStorage.getItem("operateLogs") ? JSON.parse(localStorage.getItem("operateLogs")) : []
                    operateLogs.push({
                        name: "inviteExt",
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
    onERC1155BatchReceived({rootState}, {param0, param1, param2, param3, param4}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.onERC1155BatchReceived(param0, param1, param2, param3, param4).estimateGas({
                from: rootState.app.account,
            }).then(gas => {
                state.token.methods.onERC1155BatchReceived(param0, param1, param2, param3, param4).send({
                    from: rootState.app.account,
                    gas: parseInt(gas * 1.2)
                }).then(res => {
                    let operateLogs = localStorage.getItem("operateLogs") ? JSON.parse(localStorage.getItem("operateLogs")) : []
                    operateLogs.push({
                        name: "onERC1155BatchReceived",
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
    onERC1155Received({rootState}, {param0, param1, param2, param3, param4}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.onERC1155Received(param0, param1, param2, param3, param4).estimateGas({
                from: rootState.app.account,
            }).then(gas => {
                state.token.methods.onERC1155Received(param0, param1, param2, param3, param4).send({
                    from: rootState.app.account,
                    gas: parseInt(gas * 1.2)
                }).then(res => {
                    let operateLogs = localStorage.getItem("operateLogs") ? JSON.parse(localStorage.getItem("operateLogs")) : []
                    operateLogs.push({
                        name: "onERC1155Received",
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
    setRewardsPerHour({rootState}, _newValue) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.setRewardsPerHour(_newValue).estimateGas({
                from: rootState.app.account,
            }).then(gas => {
                state.token.methods.setRewardsPerHour(_newValue).send({
                    from: rootState.app.account,
                    gas: parseInt(gas * 1.2)
                }).then(res => {
                    let operateLogs = localStorage.getItem("operateLogs") ? JSON.parse(localStorage.getItem("operateLogs")) : []
                    operateLogs.push({
                        name: "setRewardsPerHour",
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
    pause({rootState}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.pause().estimateGas({
                from: rootState.app.account,
            }).then(gas => {
                state.token.methods.pause().send({
                    from: rootState.app.account,
                    gas: parseInt(gas * 1.2)
                }).then(res => {
                    let operateLogs = localStorage.getItem("operateLogs") ? JSON.parse(localStorage.getItem("operateLogs")) : []
                    operateLogs.push({
                        name: "pause",
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
    setNFTAddr({rootState}, _addr) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.setNFTAddr(_addr).estimateGas({
                from: rootState.app.account,
            }).then(gas => {
                state.token.methods.setNFTAddr(_addr).send({
                    from: rootState.app.account,
                    gas: parseInt(gas * 1.2)
                }).then(res => {
                    let operateLogs = localStorage.getItem("operateLogs") ? JSON.parse(localStorage.getItem("operateLogs")) : []
                    operateLogs.push({
                        name: "setNFTAddr",
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
    setStakeAddr({rootState}, {_stakeA, _stakeB}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.setStakeAddr(_stakeA, _stakeB).estimateGas({
                from: rootState.app.account,
            }).then(gas => {
                state.token.methods.setStakeAddr(_stakeA, _stakeB).send({
                    from: rootState.app.account,
                    gas: parseInt(gas * 1.2)
                }).then(res => {
                    let operateLogs = localStorage.getItem("operateLogs") ? JSON.parse(localStorage.getItem("operateLogs")) : []
                    operateLogs.push({
                        name: "setStakeAddr",
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
    stake({rootState}, {value, from}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.stake(from).estimateGas({
                from: rootState.app.account,
                value: rootState.app.web3.utils.toWei(value.toString())
            }).then(gas => {
                state.token.methods.stake(from).send({
                    from: rootState.app.account,
                    gas: parseInt(gas * 1.2),
                    value: rootState.app.web3.utils.toWei(value.toString())
                }).then(res => {
                    let operateLogs = localStorage.getItem("operateLogs") ? JSON.parse(localStorage.getItem("operateLogs")) : []
                    operateLogs.push({
                        name: "stake",
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
    unpause({rootState}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.unpause().estimateGas({
                from: rootState.app.account,
            }).then(gas => {
                state.token.methods.unpause().send({
                    from: rootState.app.account,
                    gas: parseInt(gas * 1.2)
                }).then(res => {
                    let operateLogs = localStorage.getItem("operateLogs") ? JSON.parse(localStorage.getItem("operateLogs")) : []
                    operateLogs.push({
                        name: "unpause",
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
    withdraw({rootState}, {value, _tokenId}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.withdraw(_tokenId).estimateGas({
                from: rootState.app.account,
                value: rootState.app.web3.utils.toWei(value.toString())
            }).then(gas => {
                state.token.methods.withdraw(_tokenId).send({
                    from: rootState.app.account,
                    gas: parseInt(gas * 1.2),
                    value: rootState.app.web3.utils.toWei(value.toString())
                }).then(res => {
                    let operateLogs = localStorage.getItem("operateLogs") ? JSON.parse(localStorage.getItem("operateLogs")) : []
                    operateLogs.push({
                        name: "withdraw",
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
    getUpUser({rootState}, _usr) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.getUpUser(_usr).call().then(res => {
                resolve(res)
            }).catch(err => {
                      reject(JSON.parse(err.message.substr(24,err.message.length)).message)
            })
        })
    },
    isRecommender({rootState}, param0) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.isRecommender(param0).call().then(res => {
                resolve(res)
            }).catch(err => {
                      reject(JSON.parse(err.message.substr(24,err.message.length)).message)
            })
        })
    },
    nftCollAddr({rootState}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.nftCollAddr().call().then(res => {
                resolve(res)
            }).catch(err => {
                      reject(JSON.parse(err.message.substr(24,err.message.length)).message)
            })
        })
    },
    nftCollection({rootState}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.nftCollection().call().then(res => {
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
    paused({rootState}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.paused().call().then(res => {
                resolve(res)
            }).catch(err => {
                      reject(JSON.parse(err.message.substr(24,err.message.length)).message)
            })
        })
    },
    recommender({rootState}, param0) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.recommender(param0).call().then(res => {
                resolve(res)
            }).catch(err => {
                      reject(JSON.parse(err.message.substr(24,err.message.length)).message)
            })
        })
    },
    recommenderInfo({rootState}, {param0, param1}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.recommenderInfo(param0, param1).call().then(res => {
                resolve(res)
            }).catch(err => {
                      reject(JSON.parse(err.message.substr(24,err.message.length)).message)
            })
        })
    },
    rewardsToken({rootState}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.rewardsToken().call().then(res => {
                resolve(res)
            }).catch(err => {
                      reject(JSON.parse(err.message.substr(24,err.message.length)).message)
            })
        })
    },
    stakeA({rootState}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.stakeA().call().then(res => {
                resolve(res)
            }).catch(err => {
                      reject(JSON.parse(err.message.substr(24,err.message.length)).message)
            })
        })
    },
    stakeB({rootState}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.stakeB().call().then(res => {
                resolve(res)
            }).catch(err => {
                      reject(JSON.parse(err.message.substr(24,err.message.length)).message)
            })
        })
    },
    stakerAddress({rootState}, param0) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.stakerAddress(param0).call().then(res => {
                resolve(res)
            }).catch(err => {
                      reject(JSON.parse(err.message.substr(24,err.message.length)).message)
            })
        })
    },
    currentTime({rootState}, ) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.currentTime().call().then(res => {
                resolve(res)
            }).catch(err => {
                      reject(JSON.parse(err.message.substr(24,err.message.length)).message)
            })
        })
    },
    getContractBalance({rootState}, ) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.getContractBalance().call().then(res => {
                resolve(res)
            }).catch(err => {
                      reject(JSON.parse(err.message.substr(24,err.message.length)).message)
            })
        })
    },
    userTokenId({rootState}, {address, index}) {
        console.log(address,index)
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.userTokenId(address, index).call().then(res => {
                resolve(res)
            }).catch(err => {
                console.log(err)
                      reject(JSON.parse(err.message.substr(24,err.message.length)).message)
            })
        })
    },
    stakers({rootState}, param0) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.stakers(param0).call().then(res => {
                resolve(res)
            }).catch(err => {
                      reject(JSON.parse(err.message.substr(24,err.message.length)).message)
            })
        })
    },
    stakersArray({rootState}, param0) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.stakersArray(param0).call().then(res => {
                resolve(res)
            }).catch(err => {
                      reject(JSON.parse(err.message.substr(24,err.message.length)).message)
            })
        })
    },
    stakerToArrayIndex({rootState}, param0) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.stakerToArrayIndex(param0).call().then(res => {
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
    tokenIdToArrayIndex({rootState}, param0) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.tokenIdToArrayIndex(param0).call().then(res => {
                resolve(res)
            }).catch(err => {
                      reject(JSON.parse(err.message.substr(24,err.message.length)).message)
            })
        })
    },
    userAmount({rootState}, param0) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.userAmount(param0).call().then(res => {
                resolve(res)
            }).catch(err => {
                      reject(JSON.parse(err.message.substr(24,err.message.length)).message)
            })
        })
    },
    userStakeInfo({rootState}, _user) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.userStakeInfo(_user).call().then(res => {
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
