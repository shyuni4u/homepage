import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const messages = {
  en: {
    welcomeMsg: "Welcome to Your Vue.js App"
  },
  kr: {
    welcomeMsg: "Vue.js App에 오신 것을 환영합니다"
  }
};

export default new VueI18n({
  locale: "kr", // set locale
  fallbackLocale: "en", // set fallback locale
  messages // set locale messages
});