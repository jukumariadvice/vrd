import Vue from "vue";
import Vuex from "vuex";
import modules from "./modules";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentNameNav: "",
    loading: false
  },
  mutations: {
    setCurrentNameNav(state, name) {
      state.currentNameNav = name;
    },
    setLoading(state, loading) {
      state.loading = loading;
    }
  },
  actions: {},
  modules
});
