import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: null,
  },
  getters:{
    getCurrentUser(state){
      return state.currentUser;
    },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
