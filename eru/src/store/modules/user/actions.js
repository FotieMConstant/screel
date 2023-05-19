import axios from "@/axios"; //imported the custom axios `for request requiring access_token`
// import $axios from "axios"; // `$axios` is the default importation of the native axios

export default {
  // _vm is my view instance i am passing as arg to get the current route with
  // this function returns a spacific user data when passed in `username`
  // eslint-disable-next-line no-unused-vars
  async getSpecificUserAction({ commit }, payload) {
    payload._vm.$Progress.start(); //start loader

    // console.log("posting this to the backend", payload);
    try {
      let response = await axios.get(
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

  //This function updates the user profile
  async updateUserProfileAction({ commit }, { _vm, profile }) {
    try {
      _vm.$Progress.start();
      const res = await axios.post(
        this.getters.getAPI_DOMAIN + "/api/v1/auth/profile",
        profile,
        {
          headers: {
            ...axios.defaults.headers,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      _vm.$Progress.finish();

      commit(
        "authentication/SET_CURRENT_USER",
        {
          ...this.getters["authentication/getCurrentUser"],

          ...res.data.data,
        },
        { root: true }
      );
      _vm.$toast.success("Profile updated successfully!", {
        position: "bottom",
      });
    } catch (err) {
      //show an error message if profile update fails
      _vm.$Progress.fail();

      const errorData = err.response.data.data;
      //if there are messages for the errors we display them
      if (errorData) {
        for (let errorKey of Object.keys(errorData)) {
          _vm.$toast.error(errorData[errorKey][0], {
            position: "bottom",
          });
        }
      } else {
        _vm.$toast.error("Oh no, We were unable to update your profile ", {
          position: "bottom",
        });
      }
    }
  },
  // this function gets all users accross the globe
  // eslint-disable-next-line no-unused-vars
  async getUsersAcrossTheGlobeAction({ commit }, payload) {
    payload._vm.$Progress.start(); //start loader

    // console.log("getting all users across the globe", payload);
    try {
      let response = await axios.get(
        this.getters.getAPI_DOMAIN +
          "/api/v1/screelers?per_page=" +
          payload.pageNumber
      );
      // console.log(
      //   "response Screelers across the globe data from backend=> ",
      //   response.data
      // );
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
  // follow user
  // eslint-disable-next-line no-unused-vars
  async followUserAction({ commit, state }, payload) {
    payload._vm.$Progress.start(); //start loader

    // console.log("following user", payload);
    try {
      let response = await axios.post(
        this.getters.getAPI_DOMAIN + "/api/v1/screelers/follow",
        {
          follower_id: payload.follower_id,
          following_id: payload.following_id,
        }
      );

      //increment followings count on user object

      commit(
        "authentication/SET_CURRENT_USER",
        {
          ...this.getters["authentication/getCurrentUser"],

          followings_count:
            this.getters["authentication/getCurrentUser"].followings_count + 1,
        },
        { root: true }
      );

      // console.log("follow response => ", response.data);
      payload._vm.$Progress.finish(); //finish the loader

      return response.data; // returning what we got from the backend
    } catch (error) {
      // handle error
      console.log(error);
      payload._vm.$Progress.fail(); //fail the loader
      payload._vm.$toast.error(
        "Oh no, couldn't follow user: " + error.message,
        {
          position: "bottom",
        }
      );
    }
  },
  // unfollow user
  // eslint-disable-next-line no-unused-vars
  async unFollowUserAction({ commit }, payload) {
    payload._vm.$Progress.start(); //start loader

    // console.log("following user", payload);
    try {
      let response = await axios.post(
        this.getters.getAPI_DOMAIN + "/api/v1/screelers/unfollow",
        {
          follower_id: payload.follower_id,
          following_id: payload.following_id,
        }
      );

      //reduce followings count on user object
      commit(
        "authentication/SET_CURRENT_USER",
        {
          ...this.getters["authentication/getCurrentUser"],

          followings_count:
            this.getters["authentication/getCurrentUser"].followings_count - 1,
        },
        { root: true }
      );
      // console.log("unfolllow response => ", response.data);
      payload._vm.$Progress.finish(); //finish the loader

      return response.data; // returning what we got from the backend
    } catch (error) {
      // handle error
      console.log(error);
      payload._vm.$Progress.fail(); //fail the loader
      payload._vm.$toast.error(
        "Oh no, couldn't unfollow user: " + error.message,
        {
          position: "bottom",
        }
      );
    }
  },
  // get user's followers
  // eslint-disable-next-line no-unused-vars
  async getUsersFollowers({ commit }, payload) {
    payload._vm.$Progress.start(); //start loader

    // console.log("followers of user", payload);
    try {
      let response = await axios.get(
        this.getters.getAPI_DOMAIN +
          "/api/v1/screelers/followers/" +
          payload.userName +
          "?per_page=20"
      );
      // console.log("follow response => ", response.data);
      payload._vm.$Progress.finish(); //finish the loader

      return response.data; // returning what we got from the backend
    } catch (error) {
      // handle error
      console.log(error);
      payload._vm.$Progress.fail(); //fail the loader
      payload._vm.$toast.error(
        "Oh no, couldn't get " +
          payload.userName +
          "'s followers: " +
          error.message,
        {
          position: "bottom",
        }
      );
    }
  },
  // get user's followings
  // eslint-disable-next-line no-unused-vars
  async getUsersFollowerings({ commit }, payload) {
    payload._vm.$Progress.start(); //start loader

    // console.log("followers of user", payload);
    try {
      let response = await axios.get(
        this.getters.getAPI_DOMAIN +
          "/api/v1/screelers/followings/" +
          payload.userName +
          "?per_page=20"
      );
      // console.log("follow response => ", response.data);
      payload._vm.$Progress.finish(); //finish the loader

      return response.data; // returning what we got from the backend
    } catch (error) {
      // handle error
      console.log(error);
      payload._vm.$Progress.fail(); //fail the loader
      payload._vm.$toast.error(
        "Oh no, couldn't get @" +
          payload.userName +
          "'s followings: " +
          error.message,
        {
          position: "bottom",
        }
      );
    }
  },
};
