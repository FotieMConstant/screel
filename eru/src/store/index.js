import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"; // for persisting the state
const axios = require('axios');
// import router from '../router/index'; // importing router for navigations from within the store
import i18n from '../i18n'



Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: null,
    githubAuth:{
      client_id: process.env.VUE_APP_CLIENT_ID,
      client_secret: process.env.VUE_APP_CLIENT_SECRET,
      domain: "http://localhost:8080/en", //process.env.VUE_APP_DOMAIN,
      api_domain: process.env.VUE_APP_API_DOMAIN,
    },
    access_token: null
  },
  // ...
  plugins: [createPersistedState()],
  getters:{
    getCurrentUser(state){
      return state.currentUser;
    },
  },
  mutations: {
    setCurrentUser(state, payload){
      state.currentUser = payload
    }
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

        // access token plus auth user method
        async getAccessTokenAndAuthUserAction({commit, state}, code) {
          // first, get acces token
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


            // second, access token to auth user 
                console.log("Authenticating user with token...");
                const token = response.data.access_token;
                  try {
                    let responseUser = await axios.get(`https://api.github.com/user`, {
                      headers: {
                        Authorization: `Bearer ${token}`, // using the token
                      },
                    });
                    responseUser = responseUser.data;
                    console.log("Return data => ");
                    console.log(responseUser);
                    commit("setCurrentUser", responseUser); // setting logged in user to store
                    window.location.href = `/${i18n.locale}`; // redirecting to home after auth

                  } catch (error) {
                    console.log(error.message);
                  }
          
          } catch (error) {
            console.log(error);
          }
        },
        // End of access token plus auth user

  },
  modules: {
  }
})
