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
        { user_id: currentUser._id, content: payload.data }
      );
      payload._vm.post.message = null; //setting the message field to null after posting
      payload._vm.$Progress.finish(); //finish the loader
      // displaying toast of success
      payload._vm.$toast.success("Screen posted, nerd-style!😎", {
        position: "bottom",
      });
      console.log("response from backend=> ", response);
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
