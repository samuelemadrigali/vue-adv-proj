import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router";
import App from "./App.vue";

import "./assets/scss/global.scss";
import "bootstrap";

createApp(App).use(router).use(createPinia()).mount("#app");
