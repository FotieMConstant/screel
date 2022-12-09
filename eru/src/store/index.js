import { createStore } from "vuex";
import { useDark, useToggle } from "@vueuse/core";

export default createStore({
  state: {
    isDark: useDark(), //
  },
  getters: {
    // getter for isDark from state
    getIsDark(state) {
      return state.isDark;
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
  modules: {},
});
