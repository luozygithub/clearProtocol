import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    collapsed:false
  },
  getters: {

  },
  mutations: {
    SET_COLLAPSED(state,value){
      state.collapsed = value
    }
  },
  actions: {

  },
  modules: {
  }
})
