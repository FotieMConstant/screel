export default {
  SET_CURRENT_USER(state, payload) {
    state.currentUser = payload;
  },
  SET_AVAILABLE_REACTIONS(state, payload) {
    state.availableReactions = payload;
  },
  // UPDATE_HIT_SCEEL(state, payload) {
  //   state.feeds = payload;
  // },
};
