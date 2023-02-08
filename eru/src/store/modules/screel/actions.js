import axios from "@/axios"; //imported the custom axios `for request requiring access_token`
// import $axios from "axios"; // `$axios` is the default importation of the native axios
import store from "@/store";

export default {
  // _vm is my view instance i am passing as arg to get the current route with
  // eslint-disable-next-line no-unused-vars
  async postScreelAction({ commit }, payload) {
    payload._vm.$Progress.start(); //start loader

    console.log("posting this to the backend", payload);
    const currentUser = store.getters["authentication/getCurrentUser"];
    console.log("user_id", currentUser._id);
    try {
      let response = await axios.post(
        this.getters.getAPI_DOMAIN + "/api/v1/screel/store",
        {
          user_id: currentUser._id,
          content: payload.data.message,
          tags: payload.data.tags,
        }
      );
      payload._vm.post.message = null; //setting the message field to null after posting
      payload._vm.post.tags = []; //setting the tags array to null after posting
      payload._vm.checkTagsStatus(); //for checking the TagStatus and reseting the message

      payload._vm.$Progress.finish(); //finish the loader
      // displaying toast of success
      payload._vm.$toast.success("Screen posted, nerd-style!😎", {
        position: "bottom",
      });
      console.log("response from backend=> ", response);
      return true; //if the post was successful
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
      return false; //if the post was unsuccessful
    }
  },
  // eslint-disable-next-line no-unused-vars
  async getUserFeedsAction({ commit }, payload) {
    payload._vm.$Progress.start(); //start loader

    // console.log("getting feeds from backend $this object=> ", payload);
    // const currentUser = store.getters["authentication/getCurrentUser"];
    // console.log("user_id", currentUser._id);
    // console.log("page number to fetch is=> ", payload.pageNumber);

    try {
      let response = await axios.get(
        this.getters.getAPI_DOMAIN +
          "/api/v1/feeds?per_page=" +
          payload.pageNumber
      );
      payload._vm.$Progress.finish(); //finish the loader
      // displaying toast of success

      return response.data.data; // returning response
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
  async getAvailableReactionsAction({ commit }, payload) {
    payload._vm.$Progress.start(); //start loader

    try {
      let response = await axios.get(
        this.getters.getAPI_DOMAIN + "/api/v1/reactions"
      );
      payload._vm.$Progress.finish(); //finish the loader
      // displaying toast of success

      //UPDATE availableReactions
      commit("screel/SET_AVAILABLE_REACTIONS", response.data.data, {
        root: true,
      });
      return response.data.data; // returning response
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
  // eslint-disable-next-line no-unused-vars
  async reacOnScreelAction({ commit }, payload) {
    payload._vm.$Progress.start(); //start loader

    try {
      let response = await axios.post(
        this.getters.getAPI_DOMAIN + "/api/v1/screel/react",
        {
          screel_id: payload.screel_id,
          reaction_id: payload.reaction_id,
        }
      );
      payload._vm.$Progress.finish(); //finish the loader
      // displaying toast of success
      //UPDATE HIT SCREEL
      // commit("screel/UPDATE_HIT_SCEEL", response.data.data, {
      //   root: true,
      // });
      return response.data.data; // returning response
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
};
