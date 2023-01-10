import axios from "axios";

export default {
  // _vm is my view instance i am passing as arg to get the current route with
  async githubAuthMeAction({ commit }, _vm) {
    const code = _vm.$route.query.code; //getting the code from url
    console.log("auth code seen from action => " + code);
    // once i got the code
    // Make a request for a user with a given code on the fallback link api
    axios
      .get(
        this.getters.getAPI_DOMAIN + "/api/auth/github-callback?code=" + code
      )
      .then(function (response) {
        // handle success
        let dataRes = response.data.data.user;
        Object.assign(dataRes, { token: response.data.data.token });
        // console.log(dataRes);

        commit("SET_CURRENT_USER", dataRes); // setting logged in user to store

        console.log(
          "in state",
          _vm.$store.getters["authentication/getCurrentUser"]
        );
        // redirect user to home page
        _vm.$router.push("/");
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        _vm.$toast.error("There was an error!", {
          position: "bottom",
        });
      })
      .finally(function () {
        // always executed
      });

    // commit("SET_CURRENT_USER", data); //setting the current user in store
    // console.log("data from the actions module of auth=>", data);
  },

  async logMeOut({ commit }, _vm) {
    console.log("logging user out");
    commit("SET_CURRENT_USER", null); // setting user to null in user to store
    // redirect user to login after cleaning store
    _vm.$router.push("/login");
  },
};
