import { createRouter, createWebHistory } from "vue-router";
import About from "../views/About.vue";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
import NotFound from "../views/NotFound.vue";
import store from "../store";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.fullPath === "/") {
    if (!store.getters.isAuthenticated) {
      next("/login");
      return;
    }
  }
  if (to.fullPath === "/login" || to.fullPath === "/signup") {
    if (store.getters.isAuthenticated) {
      next("/");
      return;
    }
  }
  next();
});

export default router;
