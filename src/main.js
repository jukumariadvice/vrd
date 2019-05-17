import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// Lodash
window._ = require("lodash");
//import global from "@/mixins/global";

// Charts
import "chart.js";
import "hchs-vue-charts";
Vue.use(window.VueCharts);

require("./filters");
require("./plugins");

Vue.config.productionTip = false;

//Vue.mixin(global);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
