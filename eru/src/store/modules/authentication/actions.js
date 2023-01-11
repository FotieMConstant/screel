import axios from "@/axios"; //imported the custom axios

export default {
  // _vm is my view instance i am passing as arg to get the current route with
  async githubAuthMeAction({ commit }, _vm) {
    const code = _vm.$route.query.code; //getting the code from url
    console.log("github auth code seen from action => " + code);
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
        _vm.$toast.error("Oh no, an error has occurred", {
          position: "bottom",
        });
      })
      .finally(function () {
        // always executed
      });

    // commit("SET_CURRENT_USER", data); //setting the current user in store
    // console.log("data from the actions module of auth=>", data);
  },

  // _vm is my view instance i am passing as arg to get the current route with
  async googleAuthMeAction({ commit }, _vm) {
    const code = _vm.$route.query.code; //getting the code from url
    console.log("google auth code seen from action=> " + code);
    // once i got the code
    // Make a request for a user with a given code on the fallback link api
    axios
      .get(
        this.getters.getAPI_DOMAIN + "/api/auth/google-callback?code=" + code
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
        _vm.$toast.error("Aw snap, there's an error!", {
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

    axios
      .post(this.getters.getAPI_DOMAIN + "/api/auth/logout")
      .then(function (response) {
        // handle success
        console.log(response);

        commit("SET_CURRENT_USER", null); // setting user to null in user to store
        // redirect user to login after cleaning store
        // window.location.href = "/login";

        console.log(
          "in state",
          _vm.$store.getters["authentication/getCurrentUser"]
        );
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
