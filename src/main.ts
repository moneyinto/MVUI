import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import MVUI from "./components/MVUI";

createApp(App).use(store).use(router).use(MVUI).mount("#app");
