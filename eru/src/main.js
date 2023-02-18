import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./index.css";
import { i18n } from "./i18n";
import "./registerServiceWorker";
import VueProgressBar from "@aacassandra/vue3-progressbar"; // vue top bar loader import
import Toaster from "@meforma/vue-toaster"; // for the toast notification

// config for the loader
const options = {
  color: "#388BFD",
  failedColor: "#874b4b",
  thickness: "3px",
  transition: {
    speed: "0.2s",
    opacity: "0.6s",
    termination: 300,
  },
  autoRevert: true,
  location: "top",
  inverse: false,
};

import Echo from "laravel-echo";

import Pusher from "pusher-js";
window.Pusher = Pusher;
const token = store.getters["authentication/getAccessToken"];

window.Echo = new Echo({
  broadcaster: "pusher",
  key: process.env.VUE_APP_MIX_PUSHER_APP_KEY,
  cluster: "mt1",
  wsHost: process.env.VUE_APP_PUSHER_HOST,
  authEndpoint:
    process.env.VUE_APP_PUSHER_AUTH_END_POINT + "/broadcasting/auth",
  encrypted: true,
  forceTLS: false,
  wsPort: process.env.VUE_APP_PUSHER_PORT,
  wssPort: process.env.VUE_APP_PUSHER_PORT,
  disableStats: true,
  enabledTransports: ["ws", "wss"],
  auth: {
    headers: {
      authorization: "Bearer " + token,
    },
  },
});

// window.io = require("socket.io-client");
// window.Echo = new Echo({
//   broadcaster: "socket.io",
//   host: "127.0.0.1:6001",
//   auth: { headers: { Authorization: "Bearer " + token } },
// });

// window.Echo = new Echo({
//   broadcaster: "pusher",
//   key: process.env.VUE_APP_MIX_PUSHER_APP_KEY,
//   cluster: process.env.PUSHER_APP_CLUSTER ?? "mt1",
//   wsHost: process.env.PUSHER_HOST ? process.env.PUSHER_HOST : `localhost`,
//   wsPort: process.env.PUSHER_PORT ?? 80,
//   wssPort: process.env.PUSHER_PORT ?? 443,
//   forceTLS: (process.env.PUSHER_SCHEME ?? "https") === "https",
//   enabledTransports: ["ws", "wss"],
//   auth: {
//     headers: {
//       Authorization: "Bearer " + token,
//     },
//   },
//   authEndpoint: "http://localhost/api/broadcasting/auth",
// });

// window.Pusher = require("pusher-js");
//
// window.Echo = new Echo({
//   broadcaster: "pusher",
//   key: process.env,
// });

const app = createApp(App);
app.use(store);
app.use(router);
app.use(i18n);
app.use(Toaster);
app.use(VueProgressBar, options);
app.mount("#app");
