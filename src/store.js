import Vue from "vue";
import Vuex from "vuex";
import modules from "./modules";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentNameNav: ""
  },
  mutations: {
    setCurrentNameNav(state, name) {
      state.currentNameNav = name;
    }
  },
  actions: {},
  modules
});
