import { createApp } from "vue";
import App from "./App.vue";

import router from "./router/index.js";
import store from "./store/index.js";
import { BaseBadge, BaseButton, BaseCard } from "./components/ui/index.js";

const app = createApp(App);

app.use(router);
app.use(store);

app.component("BaseCard", BaseCard);
app.component("BaseButton", BaseButton);
app.component("BaseBadge", BaseBadge);

app.mount("#app");
