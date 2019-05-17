import Vue from "vue";

export async function fetchContracts({ commit }) {
  commit("setLoading", true, { root: true });
  const { data } = await Vue.axios({
    url: "contracts.json"
  });
  commit("contracts/setContracts", data, { root: true });
  commit("setLoading", false, { root: true });
}
