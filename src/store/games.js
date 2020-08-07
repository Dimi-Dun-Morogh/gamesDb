import axios from '@/plugins/axios';
import mutations from './mutations';

const {
  GAMES, CURRENT_PAGE, CURRENT_QUERY, TOTAL_RESULTS,
} = mutations;
const gamesStore = {
  namespaced: true,
  state: {
    games: [],
    gamesPerPage: 5,
    currentPage: 1,
    totalResults: 0,
    currentQuery: '',
  },
  getters: {
    games: ({ games }) => games,
  },
  mutations: {
    [GAMES](state, value) {
      state.games = value;
    },
    [CURRENT_PAGE](state, value) {
      state.currentPage = value;
    },
    [CURRENT_QUERY](state, value) {
      state.currentQuery = value;
    },
    [TOTAL_RESULTS](state, value) {
      state.totalResults = value;
    },
  },
  actions: {
    async searchGame({ commit }, query) {
      try {
        const data = await axios.get(`games?page_size=5&search=${query}`);
        commit(GAMES, data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
  },
};

// https://api.rawg.io/api/games?dates=2020-07-01,2020-07-31&ordering=-released

export default gamesStore;
