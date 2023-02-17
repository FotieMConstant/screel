export default {
  // SET_CURRENT_USER(state, payload) {
  //   state.currentUser = payload;
  // },

  SET_USER_IN_VIEW_PROFILE(state, payload) {
    state.userInView = payload;
  },
  UPDATE_USER_IN_VIEW_SCREEL(state, payload) {
    const idx = state.userInView.screels.data.findIndex(
      (screel) => screel._id === payload._id
    );
    if (idx >= 0) {
      state.userInView.screels.data.splice(idx, 1, payload);
    }
  },
};
