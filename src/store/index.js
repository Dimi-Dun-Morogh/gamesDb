import Vue from 'vue';
import Vuex from 'vuex';
import gamesStore from './games';
import gamesReleased from './gamesReleased';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    gamesStore,
    gamesReleased,
  },
});
