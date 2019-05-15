import Vue from "vue";

export async function fetchContracts({ commit }) {
  const { data } = await Vue.axios({
    url: "/contracts.json"
  });
  commit("contracts/setContracts", data, { root: true });
}
