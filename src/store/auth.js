import { firebaseSignUp, firebaseLogin, firebaseLogout } from '@/services/firebase/auth.service';
import axios from '@/plugins/axios';
import mutations from './mutations';

const { IS_LOGGED_IN } = mutations;

const authStore = {
  namespaced: true,
  state: {
    isLoggedIn: false,
  },
  getters: {
    isLoggedIn: ({ isLoggedIn }) => isLoggedIn,
  },
  mutations: {
    [IS_LOGGED_IN](state, value) {
      state.isLoggedIn = value;
    },
  },
  actions: {
    setIsLoggedInState: {
      handler({ commit }, bool) {
        commit(IS_LOGGED_IN, bool);
      },
      root: true,
    },
    async signUp({ commit, dispatch }, { email, password }) {
      try {
        const data = await firebaseSignUp(email, password);
        if (data.user) {
        // здесь можно сгенерировать temp-никнейм и создать юзер схема в ДБ
          const tempUserName = email.slice(0, 3) + Number(new Date());
          localStorage.setItem(process.env.VUE_APP_LS_TOKEN_KEY, data.user.xa);
          axios.post('api/users', { displayName: tempUserName });
        }
        commit(IS_LOGGED_IN, true);
        dispatch(
          'loadMessage',
          {
            variant: 'success',
            title: 'success',
            message: 'registration success',
            duration: 6000,
            showClose: true,
          },
          { root: true },
        );
      } catch (error) {
        dispatch(
          'loadMessage',
          {
            variant: 'danger',
            title: 'error',
            message: error.message,
            duration: 6000,
            showClose: true,
          },
          { root: true },
        );
        Promise.reject(error);
      }
    },
    async login({ dispatch }, { email, password }) {
      try {
        await firebaseLogin(email, password);
        dispatch(
          'loadMessage',
          {
            variant: 'success',
            title: 'success',
            message: 'login success',
            duration: 6000,
            showClose: true,
          },
          { root: true },
        );
      } catch (error) {
        dispatch(
          'loadMessage',
          {
            variant: 'danger',
            title: 'error',
            message: error.message,
            duration: 6000,
            showClose: true,
          },
          { root: true },
        );
      }
    },
    async logout() {
      try {
        await firebaseLogout();
      } catch (error) {
        Promise.reject(error);
      }
    },
  },
};

export default authStore;
