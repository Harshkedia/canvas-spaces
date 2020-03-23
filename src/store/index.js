import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    project: ""
  },
  mutations: {
    setProject(state, payload) {
      state.project = payload;
    }
  },
  actions: {},
  modules: {},
  getters: {
    project(state) {
      return state.project;
    }
  }
});
