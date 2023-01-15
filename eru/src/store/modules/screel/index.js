import actions from "./actions";
import getters from "./getters.js";
import mutations from "./mutations";
import { state } from "./state";

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};
