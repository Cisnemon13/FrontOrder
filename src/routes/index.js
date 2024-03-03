import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

const routes = [
  //la ruta base
  {
    path: "/",
    redirect: "/login",
  },
  //rutas asociadas a los componentes
  {
    path: "/",
    component: {
      render(c) {
        return c("router-view");
      },
    },
    //los componentes que se renderizan en router vue
    children: [
      {
        path: "/login",
        name: "login",
        component: () => import("../components/Login.vue"),
      },
      {
        path: "/register",
        name: "register",
        component: () => import("../components/Register.vue"),
      },
      //Inicio
      {
        path: "/landing",
        name: "landing",
        component: () => import("../components/Landing.vue"),
      },
      {
        path: "/taquizas",
        name: "taquizas",
        component: () => import("../components/Taquizas.vue"),
      },
    ],
  },
];

const router = new VueRouter({ routes });
export default router;
