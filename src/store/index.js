import Vue from "vue";
import Vuex from "vuex";

import outputsModule from "../components/outputs/store.module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    outputs: outputsModule,
  },
  mutations: {},
  actions: {},
});
