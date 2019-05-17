import Vue from "vue";
import Router from "vue-router";
import routes from "./routes";
import store from "./store";

Vue.use(Router);

const router = new Router({
  routes
});

router.beforeEach((to, from, next) => {
  //console.log(to);
  if (to.name === "contracts") {
    if (to.params.departament != "la-paz") {
      next({ name: "contracts", params: { departament: "la-paz" } });
    } else {
      store.state.currentNameNav = to.params.departament
        .replace("-", " ")
        .toUpperCase();
      next();
    }
  } else if (to.name === "top") {
    //store.state.currentNameNav = to.name.replace("-", " ").toUpperCase();
    store.state.currentNameNav = to.meta.title.replace("-", " ").toUpperCase();
    next();
  } else {
    next();
  }
});

export default router;
