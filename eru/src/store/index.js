import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import { useDark, useToggle } from "@vueuse/core";
import authentication from "./modules/authentication";

export default createStore({
  state: {
    API_DOMAIN: process.env.VUE_APP_API_DOMAIN,
    APP_DOMAIN: process.env.VUE_APP_DOMAIN,
    isDark: useDark(), // user theme
    // currentUser: null, // current loggedin user
  },
  // persis states from store plugin
  plugins: [createPersistedState()],

  getters: {
    // getter for isDark from state
    getIsDark(state) {
      return state.isDark;
    },
    getAPI_DOMAIN(state) {
      return state.API_DOMAIN;
    },
    getAPP_DOMAIN(state) {
      return state.APP_DOMAIN;
    },
  },
  mutations: {
    // toggle mutation
    setToggleDark(state, payload) {
      state.isDark = payload;
      console.log("isDark on => " + state.isDark);
    },
  },
  actions: {
    // toggle between light and dark mode action function
    toggleDarkAction({ commit, state }) {
      let isDarkTemp = !state.isDark;
      useToggle(isDarkTemp); // toggling here
      commit("setToggleDark", isDarkTemp);
    },
  },
  modules: {
    authentication,
  },
});
