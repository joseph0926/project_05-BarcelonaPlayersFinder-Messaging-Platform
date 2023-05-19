import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      players: [
        {
          id: "p1",
          name: "Pedri",
          position: "MF",
          description:
            "스페인 국적의 FC 바르셀로나 소속 축구선수. 포지션은 중앙 미드필더.",
          rate: 1000,
        },
        {
          id: "p2",
          name: "Dejong",
          position: "MF",
          description:
            "네덜란드 국적의 FC 바르셀로나 소속 축구선수. 포지션은 중앙 미드필더.",
          rate: 800,
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
