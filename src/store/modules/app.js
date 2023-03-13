
const state = {
    web3:null,
    account:'',
    isConnected:false,
    chainId: 666,
    ethBalance:0,
    collapsed:true,
    desireChainId: null,
}

const mutations = {
    SET_ACCOUNT(state, account){
        state.account = account
    },
    SET_ISCONNECT(state, isConnect){
        state.isConnected = isConnect
    },
    SET_Web3(state, web3){
        state.web3= web3
    },
    SET_Balance(state, amount){
        state.ethBalance= amount
    },
    SET_CHAINID: (state, chainId) => {
        state.chainId = chainId;
    },
    SET_DESIRE_CHAINID: (state, desireChainId) => {
        state.desireChainId = desireChainId;
    },
    SET_SIDEBAR(state, isCollapse){
        state.collapsed= isCollapse
    },
    SET_PRICE(state, val){
        state.priceMap= val
    },

}
const getters= {
    wrongNetWork(state) {
        return state.chainId !== state.desireChainId;
    },
}
const actions = {
    toggleSideBar({commit},isCollapse){
        commit("SET_SIDEBAR",isCollapse)
    },
    updateDesireChainId({ commit }, chainId) {
        commit('SET_DESIRE_CHAINID', chainId);
    },
    updateChainId({commit}, chainId){
        commit("SET_CHAINID", chainId)
    },
}
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
