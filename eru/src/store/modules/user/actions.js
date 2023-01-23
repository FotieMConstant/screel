import axios from "@/axios"; //imported the custom axios `for request requiring access_token`
import $axios from "axios"; // `$axios` is the default importation of the native axios

export default {
  // _vm is my view instance i am passing as arg to get the current route with
  // this function returns a spacific user data when passed in `username`
  // eslint-disable-next-line no-unused-vars
  async getSpecificUserAction({ commit }, payload) {
    payload._vm.$Progress.start(); //start loader

    console.log("posting this to the backend", payload);
    try {
      let response = await $axios.get(
        this.getters.getAPI_DOMAIN + "/api/v1/auth/" + payload.data
      );
      // console.log("response user data from backend=> ", response.data);
      payload._vm.$Progress.finish(); //finish the loader

      return response.data.data; // returning what we got from the backend
    } catch (error) {
      // handle error
      console.log(error);
      payload._vm.$Progress.fail(); //fail the loader
      payload._vm.$toast.error(
        "Oh no, an error has occurred: " + error.message,
        {
          position: "bottom",
        }
      );
    }
  },
  // this function gets all users accross the globe
  // eslint-disable-next-line no-unused-vars
  async getUsersAcrossTheGlobeAction({ commit }, payload) {
    payload._vm.$Progress.start(); //start loader

    console.log("getting all users across the globe", payload);
    try {
      let response = await axios.get(
        this.getters.getAPI_DOMAIN +
          "/api/v1/screelers?per_page=" +
          payload.pageNumber
      );
      console.log(
        "response Screelers across the globe data from backend=> ",
        response.data
      );
      payload._vm.$Progress.finish(); //finish the loader

      return response.data.data; // returning what we got from the backend
    } catch (error) {
      // handle error
      console.log(error);
      payload._vm.$Progress.fail(); //fail the loader
      payload._vm.$toast.error(
        "Oh no, couldn't get users across the globe: " + error.message,
        {
          position: "bottom",
        }
      );
    }
  },
};
