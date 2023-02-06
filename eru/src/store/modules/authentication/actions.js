import axios from "@/axios"; //imported the custom axios `for request requiring access_token`
import $axios from "axios"; // `$axios` is the default importation of the native axios
import store from "@/store";

export default {
  // _vm is my view instance i am passing as arg to get the current route with
  async githubAuthMeAction({ commit }, _vm) {
    const code = _vm.$route.query.code; //getting the code from url
    console.log("github auth code seen from action => " + code);
    // once i got the code
    // Make a request for a user with a given code on the fallback link api
    try {
      let access_token = await $axios.get(
        this.getters.getAPI_DOMAIN + "/api/v1/auth/github-callback?code=" + code
      );
      access_token = access_token.data.data.token;
      console.log("access_token gotten=>", access_token);
      commit("SET_ACCESSTOKEN", access_token); // setting access_token in store to use later in the interceptors

      // second request to get the actual user data using the costum axios
      let userData = await axios.get(
        this.getters.getAPI_DOMAIN + "/api/v1/auth/me"
      );
      console.log("userData gotten=>", userData.data.data);

      commit("SET_CURRENT_USER", userData.data.data); // setting logged in user to store

      console.log("in state", store.getters["authentication/getCurrentUser"]);

      const redirect = sessionStorage.getItem("redirect"); // getting redirect url from sessionStorage
      console.log("redirect URL=> ", redirect);
      // if the user was going somewhere redirect them there
      if (redirect) {
        window.location.href = redirect;
      } else {
        window.location.href = "/";
      }
      _vm.$echo
        .private(`user.${userData.data.data._id}`)
        .notification((notification) => {
          console.log("notification ==>> ", notification);
          // this.handleNotification(notification);
        });
      sessionStorage.clear(); //clear sessionStorage after redirecting
    } catch (error) {
      // handle error
      console.log(error);
      _vm.$toast.error("Oh no, an error has occurred", {
        position: "bottom",
      });
    }
  },

  // _vm is my view instance i am passing as arg to get the current route with
  async googleAuthMeAction({ commit }, _vm) {
    const code = _vm.$route.query.code; //getting the code from url
    console.log("google auth code seen from action=> " + code);
    // once i got the code
    // Make a request for a user with a given code on the fallback link api

    try {
      let access_token = await $axios.get(
        this.getters.getAPI_DOMAIN + "/api/v1/auth/google-callback?code=" + code
      );
      access_token = access_token.data.data.token;
      console.log("access_token gotten=>", access_token);
      commit("SET_ACCESSTOKEN", access_token); // setting access_token in store to use later in the interceptors

      // second request to get the actual user data using the costum axios
      let userData = await axios.get(
        this.getters.getAPI_DOMAIN + "/api/v1/auth/me"
      );
      console.log("userData gotten=>", userData.data.data);

      commit("SET_CURRENT_USER", userData.data.data); // setting logged in user to store

      console.log("in state", store.getters["authentication/getCurrentUser"]);

      const redirect = sessionStorage.getItem("redirect"); // getting redirect url from sessionStorage
      console.log("redirect URL=> ", redirect);
      // if the user was going somewhere redirect them there
      if (redirect) {
        window.location.href = redirect;
      } else {
        window.location.href = "/";
      }
      sessionStorage.clear(); //clear sessionStorage after redirecting
    } catch (error) {
      // handle error
      console.log(error);
      _vm.$toast.error("Oh no, an error has occurred", {
        position: "bottom",
      });
    }
    // commit("SET_CURRENT_USER", data); //setting the current user in store
    // console.log("data from the actions module of auth=>", data);
  },

  // _vm is my view instance i am passing as arg to get the current route with
  async linkedinAuthMeAction({ commit }, _vm) {
    const code = _vm.$route.query.code; //getting the code from url
    console.log("linkedin auth code seen from action=> " + code);
    // once i got the code
    // Make a request for a user with a given code on the fallback link api

    try {
      let access_token = await $axios.get(
        this.getters.getAPI_DOMAIN +
          "/api/v1/auth/linkedin-callback?code=" +
          code
      );
      access_token = access_token.data.data.token;
      console.log("access_token gotten=>", access_token);
      commit("SET_ACCESSTOKEN", access_token); // setting access_token in store to use later in the interceptors

      // second request to get the actual user data using the costum axios
      let userData = await axios.get(
        this.getters.getAPI_DOMAIN + "/api/v1/auth/me"
      );
      console.log("userData gotten=>", userData.data.data);

      commit("SET_CURRENT_USER", userData.data.data); // setting logged in user to store

      console.log("in state", store.getters["authentication/getCurrentUser"]);

      const redirect = sessionStorage.getItem("redirect"); // getting redirect url from sessionStorage
      console.log("redirect URL=> ", redirect);
      // if the user was going somewhere redirect them there
      if (redirect) {
        window.location.href = redirect;
      } else {
        window.location.href = "/";
      }
      sessionStorage.clear(); //clear sessionStorage after redirecting
    } catch (error) {
      // handle error
      console.log(error);
      _vm.$toast.error("Oh no, an error has occurred", {
        position: "bottom",
      });
    }
    // commit("SET_CURRENT_USER", data); //setting the current user in store
    // console.log("data from the actions module of auth=>", data);
  },

  //action to get the current user data
  async getCurrentUser({ commit } /*_vm*/) {
    console.log("Getting current user!");

    try {
      let userData = await axios.get(
        this.getters.getAPI_DOMAIN + "/api/v1/auth/me"
      );
      console.log("userData gotten=>", userData.data.data);

      commit("SET_CURRENT_USER", userData.data.data); // setting logged in user to store

      console.log("in state", store.getters["authentication/getCurrentUser"]);
    } catch (err) {
      console.log(err);
      // _vm.$toast.error("Oh no, we are unable to get the current user", {
      //   position: "bottom",
      // });
    }
  },

  async logMeOut({ commit }, _vm) {
    console.log("logging user out");

    axios
      .post(this.getters.getAPI_DOMAIN + "/api/v1/auth/logout")
      .then(function (response) {
        // handle success
        console.log(response);

        commit("SET_CURRENT_USER", null); // setting user to null in user to store
        // redirect user to login after cleaning store
        window.location.href = "/login";

        console.log("in state", store.getters["authentication/getCurrentUser"]);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        _vm.$toast.error("Whoopsie, something went haywire.", {
          position: "bottom",
        });
      })
      .finally(function () {
        // always executed
      });
  },
};
