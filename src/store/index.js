import Vue from "vue";
import Vuex from "vuex";

import todosModule from "./store.module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    todo: todosModule,
  },
  mutations: {},
  actions: {},
});
