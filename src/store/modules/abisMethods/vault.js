import getContract from "@/abi/index.js";

function judgeToken(rootState) {
    if (!state.token) state.token = getContract.getContractByName('vault', rootState.app.web3)
}

const state = {};
const mutations = {};
const actions = {
    POSITION_PRECISE({rootState}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.POSITION_PRECISE().call().then(res => {
                resolve(res)
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    PRICE_PRECISION({rootState}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.PRICE_PRECISION().call().then(res => {
                resolve(res)
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    PRICE_TO_USD({rootState}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.PRICE_TO_USD().call().then(res => {
                resolve(res)
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    RATE_DIVISOR({rootState}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.RATE_DIVISOR().call().then(res => {
                resolve(res)
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    USD_PRECISION({rootState}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.USD_PRECISION().call().then(res => {
                resolve(res)
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    allIndexTokens({rootState}, {param0}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.allIndexTokens(param0).call().then(res => {
                resolve(res)
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    clearingMarginRate({rootState}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.clearingMarginRate().call().then(res => {
                resolve(res)
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    collateral({rootState}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.collateral().call().then(res => {
                resolve(res)
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    errors({rootState}, {param0}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.errors(param0).call().then(res => {
                resolve(res)
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    feeOwner({rootState}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.feeOwner().call().then(res => {
                resolve(res)
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    gov({rootState}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.gov().call().then(res => {
                resolve(res)
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    initialized({rootState}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.initialized().call().then(res => {
                resolve(res)
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    liquidateFeeRate({rootState}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.liquidateFeeRate().call().then(res => {
                resolve(res)
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    lpFeeRate({rootState}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.lpFeeRate().call().then(res => {
                resolve(res)
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    oracle({rootState}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.oracle().call().then(res => {
                resolve(res)
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    platformFee({rootState}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.platformFee().call().then(res => {
                resolve(res)
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    positions({rootState}, {param0, param1}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.positions(param0, param1).call().then(res => {
                resolve(res)
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    reserveAmount({rootState}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.reserveAmount().call().then(res => {
                resolve(res)
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    transactionFeeRate({rootState}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.transactionFeeRate().call().then(res => {
                resolve(res)
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    usd({rootState}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.usd().call().then(res => {
                resolve(res)
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    vaultUtil({rootState}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.vaultUtil().call().then(res => {
                resolve(res)
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    initialize({rootState}, {_gov, _oracle, _usd, _vaultUtil, _feeOwner, _clp}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.initialize(_gov, _oracle, _usd, _vaultUtil, _feeOwner, _clp).estimateGas({
                from: rootState.app.account,
            }).then(gas => {
                state.token.methods.initialize(_gov, _oracle, _usd, _vaultUtil, _feeOwner, _clp).send({
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
    setOracle({rootState}, {_newOracle}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.setOracle(_newOracle).estimateGas({
                from: rootState.app.account,
            }).then(gas => {
                state.token.methods.setOracle(_newOracle).send({
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
    setFeeOwner({rootState}, {_feeOwner}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.setFeeOwner(_feeOwner).estimateGas({
                from: rootState.app.account,
            }).then(gas => {
                state.token.methods.setFeeOwner(_feeOwner).send({
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
    setIndexToken({rootState}, {_indexToken, _allow}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.setIndexToken(_indexToken, _allow).estimateGas({
                from: rootState.app.account,
            }).then(gas => {
                state.token.methods.setIndexToken(_indexToken, _allow).send({
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
    setClearingMarginRate({rootState}, {_clearingMarginRate}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.setClearingMarginRate(_clearingMarginRate).estimateGas({
                from: rootState.app.account,
            }).then(gas => {
                state.token.methods.setClearingMarginRate(_clearingMarginRate).send({
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
    setLiquidateFeeRate({rootState}, {_liquidateFeeRate}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.setLiquidateFeeRate(_liquidateFeeRate).estimateGas({
                from: rootState.app.account,
            }).then(gas => {
                state.token.methods.setLiquidateFeeRate(_liquidateFeeRate).send({
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
    setTransactionFeeRate({rootState}, {_transactionFeeRate}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.setTransactionFeeRate(_transactionFeeRate).estimateGas({
                from: rootState.app.account,
            }).then(gas => {
                state.token.methods.setTransactionFeeRate(_transactionFeeRate).send({
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
    setLpFeeRate({rootState}, {_lpFeeRate}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.setLpFeeRate(_lpFeeRate).estimateGas({
                from: rootState.app.account,
            }).then(gas => {
                state.token.methods.setLpFeeRate(_lpFeeRate).send({
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
    allIndexTokensLength({rootState}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.allIndexTokensLength().call().then(res => {
                resolve(res)
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    withdrawFee({rootState}, {_receiver, _amount}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.withdrawFee(_receiver, _amount).estimateGas({
                from: rootState.app.account,
            }).then(gas => {
                state.token.methods.withdrawFee(_receiver, _amount).send({
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
    setError({rootState}, {_errorCode, _error}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.setError(_errorCode, _error).estimateGas({
                from: rootState.app.account,
            }).then(gas => {
                state.token.methods.setError(_errorCode, _error).send({
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
    updateCollateral({rootState}, {_indexToken, _collateralDelta, _collateralDeltaInIO}) {
        console.log({
            _indexToken, _collateralDelta, _collateralDeltaInIO
        })
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.updateCollateral(_indexToken, _collateralDelta, _collateralDeltaInIO).estimateGas({
                from: rootState.app.account,
            }).then(gas => {
                state.token.methods.updateCollateral(_indexToken, _collateralDelta, _collateralDeltaInIO).send({
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

    updatePosition({rootState}, {
        _indexToken,
        _leverage,
        _sizeDelta,
        _collateralDelta,
        _indexPrice,
        _direction,
        _collateralDeltaInIO
    }) {
        console.log(  {_indexToken,
            _leverage,
            _sizeDelta,
            _collateralDelta,
            _indexPrice,
            _direction,
            _collateralDeltaInIO})
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.updatePosition(_indexToken, _leverage, _sizeDelta, _collateralDelta, _indexPrice, _direction, _collateralDeltaInIO).estimateGas({
                from: rootState.app.account,
            }).then(gas => {
                state.token.methods.updatePosition(_indexToken, _leverage, _sizeDelta, _collateralDelta, _indexPrice, _direction, _collateralDeltaInIO).send({
                    from: rootState.app.account,
                    gas: parseInt(gas * 1.2)
                }).then(res => {
                    resolve(res)
                }).catch(err => {
                    console.log(err)
                    reject(JSON.parse(err.message.substr(24, err.message.length)).message)
                })
            }).catch(err => {
                console.log(err)
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    liquidatePosition({rootState}, {_indexToken, _account}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.liquidatePosition(_indexToken, _account).estimateGas({
                from: rootState.app.account,
            }).then(gas => {
                state.token.methods.liquidatePosition(_indexToken, _account).send({
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
    updateFundingRate({rootState}, {_indexToken, _report}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.updateFundingRate(_indexToken, _report).estimateGas({
                from: rootState.app.account,
            }).then(gas => {
                state.token.methods.updateFundingRate(_indexToken, _report).send({
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
    updateFundingRateTest({rootState}, {_time}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.updateFundingRateTest(_time).estimateGas({
                from: rootState.app.account,
            }).then(gas => {
                state.token.methods.updateFundingRateTest(_time).send({
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
    getPrice({rootState}, {_indexToken}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.getPrice(_indexToken).call().then(res => {
                resolve(res)
            }).catch(err => {
                console.log(err)
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    globalData({rootState}, {_indexToken}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.globalData(_indexToken).call().then(res => {
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
