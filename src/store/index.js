import Vue from 'vue';
import Vuex from 'vuex';
import firebase from '@/plugins/firebase';
import { getUserIdToken } from '@/services/firebase/auth.service';
import gamesReleased from './gamesReleased';
import authStore from './auth';
import notifyStore from './notify';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    gamesReleased,
    authStore,
    notifyStore,
  },
});

firebase.auth().onAuthStateChanged(async (userData) => {
  console.log('onAuthStateChanged', userData);
  store.dispatch('setIsLoggedInState', Boolean(userData));
  if (userData) {
    const token = await getUserIdToken();
    localStorage.setItem(process.env.VUE_APP_LS_TOKEN_KEY, token);
  } else {
    localStorage.removeItem(process.env.VUE_APP_LS_TOKEN_KEY);
  }
});

export default store;
