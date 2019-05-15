import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import global from "@/mixins/global";
import FormatPosition from "./filters/format-position";

require("./plugins");

Vue.config.productionTip = false;

//Vue.mixin(global);

Vue.filter("position", FormatPosition);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
