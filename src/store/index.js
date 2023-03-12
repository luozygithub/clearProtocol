import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from "./modules/app";
import abisMethods from "./modules/abisMethods/index"
import perpetual from "@/store/modules/perpetual";
Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        collapsed:false
    },
    mutations:{
        SET_COLLAPSED(state, isCollapse){
            state.collapsed= isCollapse
        },
    },
    getters,
    modules: {
        app,
        perpetual,
        ...abisMethods
    }
})
