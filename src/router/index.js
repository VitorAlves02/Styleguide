import Vue from "vue";
import VueRouter from "vue-router";
import Typography from "../components/Typography.vue";
import Colors from "../components/Colors.vue";
import Botoes from "../components/Botoes.vue";
import Inputs from "../components/Inputs.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/typography",
    name: "Typography",
    component: Typography
  },
  {
    path: "/colors",
    name: "Colors",
    component: Colors
  },
  {
    path: "/botoes",
    name: "Botoes",
    component: Botoes
  },
  {
    path: "/inputs",
    name: "Inputs",
    component: Inputs
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
