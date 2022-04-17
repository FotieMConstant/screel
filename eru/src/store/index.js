import Vue from 'vue'
import Vuex from 'vuex'
const axios = require('axios');


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: null,
    githubAuth:{
      client_id: process.env.VUE_APP_CLIENT_ID,
      client_secret: process.env.VUE_APP_CLIENT_SECRET,
      domain: "http://localhost:8080/en", //process.env.VUE_APP_DOMAIN,
      api_domain: process.env.VUE_APP_API_DOMAIN,
    }
  },
  getters:{
    getCurrentUser(state){
      return state.currentUser;
    },
  },
  mutations: {
  },
  actions: {
        // github function to authorize a user and get code
        githubAuthorizeAction({state}) {
          console.log("Trying to reach github for auth");

          // redirect the user to get their credentials
          window.location.href =
            "https://github.com/login/oauth/authorize?client_id=" +
            state.githubAuth.client_id +
            "&redirect_uri=" +
            state.githubAuth.domain +
            "/auth&scope=read:user";
        },

        // access token method
        async getAccessTokenAction({state},code) {
          try {
            // getting the token from my own custom api returned to me
            const response = await axios.post(
              `http://localhost:3000/v1/gh_access_token`,
              {
                client_id: state.githubAuth.client_id,
                client_secret: state.githubAuth.client_secret,
                code: code,
                redirect_uri:  state.githubAuth.domain
              }
            );
            console.log(response.data);
          
          } catch (error) {
            console.log(error);
          }
        },
        // End of access token
  },
  modules: {
  }
})
