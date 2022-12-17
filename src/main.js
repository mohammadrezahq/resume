import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import "./index.css";
import router from "./router";
import messages from "@intlify/unplugin-vue-i18n/messages";
import { createI18n } from "vue-i18n";
import { getRoutesNames } from "./inc";

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: "en",
  fallbackLocale: "en",
  availableLocales: ["en", "de"],
  messages: messages,
});

const app = createApp(App);

app.use(router);
app.use(createPinia());
app.use(i18n);

app.provide("routesList", getRoutesNames(router));

app.mount("#app");
