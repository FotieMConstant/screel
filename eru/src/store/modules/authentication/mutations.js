export default {
  SET_CURRENT_USER(state, payload) {
    state.currentUser = payload;
  },
  SET_ACCESSTOKEN(state, payload) {
    state.access_token = payload;
  },
};
