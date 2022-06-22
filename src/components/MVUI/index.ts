import { App } from "vue";
import "./styles/index.scss";
import Components from "./components";

export default {
    install(app: App) {
        for (const [key, value] of Object.entries(Components)) {
            app.component("Mv" + key, value);
        }
    }
};