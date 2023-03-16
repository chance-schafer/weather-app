import { createApp } from "vue";
import { createPinia } from "pinia";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";

library.add(faUserSecret);

const app = createApp(App);

app.use(createPinia());
app.use(router);

import App from "./App.vue";
import router from "./router";

import "./assets/styles/_base.scss";

app.mount("#app");
