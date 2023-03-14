import {getTokenPrices} from "@/api/coinApi";
import  {getPositions,getProfit,getRecord,getFundingFee} from "@/api/vault"

const state = {
    positionArr:[],
    profitArr:[],
    recordArr:[],
    fundingArr:[],
    priceMap:{

    }
}

const mutations = {

    SET_PRICE(state, val){
        state.priceMap= val
    },
    SET_Position(state, val){
        state.positionArr= val
    },
    SET_Profit(state, val){
        state.profitArr= val
    },
    SET_Record(state, val){
        state.recordArr= val
    },
    SET_Funding(state, val){
        state.fundingArr= val
    },
}
const actions = {
    async getFundingFeeAction({commit}, ){
        let priceRes = await getFundingFee()
        if( priceRes&&priceRes.data.data){
            commit("SET_Funding",  priceRes.data.data)
        }
    },
    async getProfitAction({commit}, ){
        let priceRes = await getProfit()
        if( priceRes&&priceRes.data.data){
            commit("SET_Profit",  priceRes.data.data)
        }
    },
    async getRecordAction({commit}, ){
        let priceRes = await getRecord()
        if( priceRes&&priceRes.data.data){
            commit("SET_Record",  priceRes.data.data)
        }
    },
    async getPriceMap({commit}, ){
        let priceRes = await getTokenPrices()
        if( priceRes&&priceRes.data.data){
            commit("SET_PRICE",  priceRes.data.data)
        }
    },
    async getPositionAction({commit,rootState}){
        const res = await getPositions(rootState.app.account)
        if( res&&res.data.data){
            commit("SET_Position",  res.data.data)
        }else{
            commit("SET_Position",  [])
        }
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}
