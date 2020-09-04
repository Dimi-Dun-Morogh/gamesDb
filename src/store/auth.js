import { firebaseSignUp, firebaseLogin, firebaseLogout } from '@/services/firebase/auth.service';
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
        console.log(data);
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
        console.log(error);
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
    async login({ dispatch }, { email, password }) {
      try {
        const data = await firebaseLogin(email, password);
        console.log(data);
      } catch (error) {
        console.log(error);
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
        const data = await firebaseLogout();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
  },
};

export default authStore;
