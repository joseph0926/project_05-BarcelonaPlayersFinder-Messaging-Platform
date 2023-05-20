import { createRouter, createWebHistory } from "vue-router";

import { ContactPlayer, NotFound, PlayerDetail, PlayerRegistraion, PlayersList, RequestRecevied } from "@/pages/index.js";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/player" },
    { path: "/player", component: PlayersList },
    {
      path: "/player/:playerId",
      component: PlayerDetail,
      props: true,
      children: [{ path: "contact", component: ContactPlayer }],
    },
    { path: "/register", component: PlayerRegistraion },
    { path: "/requests", component: RequestRecevied },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;
