import {getTokenPrices} from "@/api/coinApi";

const state = {

    priceMap:{}
}

const mutations = {

    SET_PRICE(state, val){
        state.priceMap= val
    },

}
const actions = {

    async getPriceMap({commit}, ){
        let priceRes = await getTokenPrices()
        if( priceRes&&priceRes.data.data){
            commit("SET_PRICE",  priceRes.data.data)
        }
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}
