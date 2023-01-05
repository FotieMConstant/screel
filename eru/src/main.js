import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./index.css";
import { createI18n } from "vue-i18n";
import loadLocaleMessages from "./i18nHelpers";
import "./registerServiceWorker";
import VueProgressBar from "@aacassandra/vue3-progressbar"; // vue top bar loader import

// consig for the loader
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

// i18n configuration
const i18n = createI18n({
  // something vue-i18n options here ...
  locale: process.env.VUE_APP_I18N_LOCALE || "en",
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || "en",
  messages: loadLocaleMessages(),
});

const app = createApp(App);
app.use(store);
app.use(router);
app.use(i18n);
app.use(VueProgressBar, options);
app.mount("#app");
