import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./index.css";
import { createI18n } from "vue-i18n";
import loadLocaleMessages from "./i18nHelpers";
import "./registerServiceWorker";

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
app.mount("#app");
