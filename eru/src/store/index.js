import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
// import { useDark, useToggle } from "@vueuse/core";
import authentication from "./modules/authentication"; // for everything auth
import screel from "./modules/screel"; // for everything screel
import user from "./modules/user"; // for everything user

export default createStore({
  state: {
    API_DOMAIN: process.env.VUE_APP_API_DOMAIN,
    APP_DOMAIN: process.env.VUE_APP_DOMAIN,
    isDark: true, // user theme
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
      commit("setToggleDark", !state.isDark);
    },
  },
  modules: {
    authentication,
    screel,
    user,
  },
});
