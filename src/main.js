import { createApp } from "vue";
import { createPinia } from "pinia";

const app = createApp(App);

app.use(createPinia());
app.use(router);

import App from "./App.vue";
import router from "./router";

import "./assets/styles/_base.scss";

app.mount("#app");
