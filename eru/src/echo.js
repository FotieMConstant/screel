import Vue from "vue";
import Echo from "laravel-echo";
// import Cookies from "js-cookie";
import store from "@/store";

window.io = require("socket.io-client");

const token = store.getters["authentication/getAccessToken"];

export var echo_instance = new Echo({
  broadcaster: "socket.io",
  host: process.env.VUE_APP_API_DOMAIN + ":6001",
  auth: {
    headers: {
      /** I'm using access tokens to access  **/
      //   Authorization: "Bearer " + Cookies.get("access_token"),
      Authorization: "Bearer " + token,
    },
  },
});

Vue.prototype.$echo = echo_instance;

export default Vue;
