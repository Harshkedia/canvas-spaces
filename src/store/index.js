import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    project: "",
    image: ""
  },
  mutations: {
    setProject(state, payload) {
      state.project = payload;
    },
    setImage(state, payload) {
      state.image = payload;
    }
  },
  actions: {},
  modules: {},
  getters: {
    project(state) {
      return state.project;
    },
    image(state) {
      return state.image;
    }
  }
});
