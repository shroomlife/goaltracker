import Vue from "vue";
import VueRouter from "vue-router";
import Games from "../views/Games.vue";
import Start from "../views/Start.vue";
import EditGame from "../views/EditGame.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Spiele",
    component: Games
  },
  {
    path: "/start",
    name: "Start",
    component: Start
  },
  {
    path: "/neu",
    name: "Neu",
    component: EditGame
  },
  {
    path: "/edit/:id",
    name: "Neu",
    component: EditGame
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
