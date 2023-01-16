import { createI18n } from "vue-i18n";
import loadLocaleMessages from "./i18nHelpers";
// i18n configuration
export const i18n = createI18n({
  // something vue-i18n options here ...
  locale: localStorage.getItem("last-locale")
    ? localStorage.getItem("last-locale")
    : process.env.VUE_APP_I18N_LOCALE || "en",
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || "en",
  messages: loadLocaleMessages(),
});
