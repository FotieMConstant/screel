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

const app = createApp(App);
app.use(store);
app.use(router);
app.use(i18n);
app.use(Toaster);
app.use(VueProgressBar, options);
app.mount("#app");
