import mutations from '@/store/mutations';
import axios from '@/plugins/axios';

const { USER } = mutations;

const userStore = {
  namespaced: true,
  state: {
    user: {},
  },
  getters: {
    user: ({ user }) => user,
  },
  mutations: {
    [USER](state, value) {
      state.user = value;
    },
  },
  actions: {
    setUserState: {
      handler({ dispatch }) {
        dispatch('getUserByMail');
      },
      root: true,
    },
    async getUserByMail({ commit }) {
      try {
        const res = await axios.get('api/users/userbymail');
        commit(USER, res);
        console.log('hi getUserByMail');
      } catch (error) {
        Promise.reject(error);
      }
    },
    async updateUserData({ dispatch }, data) {
      try {
        await axios.post('api/users/updateuser', data);
        dispatch('getUserByMail');
        dispatch(
          'loadMessage',
          {
            variant: 'info',
            title: 'update',
            message: 'data update success',
            duration: 6000,
            showClose: true,
          },
          { root: true },
        );
      } catch (error) {
        Promise.reject(error);
      }
    },
  },
};

export default userStore;
