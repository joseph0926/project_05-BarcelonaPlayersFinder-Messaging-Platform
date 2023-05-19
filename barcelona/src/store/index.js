import { createStore } from "vuex";

import playersModule from "./modules/players/index.js";

const store = createStore({
  modules: {
    players: playersModule,
  },
});

export default store;
