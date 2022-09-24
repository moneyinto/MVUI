import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import MVUI from "./components/MVUI";
import "@/assets/styles/global.scss";
import plugins from "./plugins";

const app = createApp(App);
app.use(store)
    .use(plugins)
    .use(router)
    .use(MVUI)
    .mount("#app");
