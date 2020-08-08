import axios from '@/plugins/axios';
import mutations from './mutations';

const {
  CURRENT_PAGE, CURRENT_QUERY, TOTAL_RESULTS, TOTAL_RESULTS_LAST_MONTH, GAMES_RELEASED,
} = mutations;
const gamesLastMonth = {
  namespaced: true,
  state: {
    gamesPerPage: 8,
    currentPage: 1,
    totalResults: 0,
    totalResultsLastMonth: 0,
    gamesReleased: [],
  },
  getters: {
    totalResults: ({ totalResults }) => totalResults,
    totalResultsLastMonth: ({ totalResultsLastMonth }) => totalResultsLastMonth,
    gamesReleased: ({ gamesReleased }) => gamesReleased,
    gamesPerPage: ({ gamesPerPage }) => gamesPerPage,
    currentPage: ({ currentPage }) => currentPage,

  },
  mutations: {
    [CURRENT_PAGE](state, value) {
      state.currentPage = value;
    },
    [CURRENT_QUERY](state, value) {
      state.currentQuery = value;
    },
    [TOTAL_RESULTS](state, value) {
      state.totalResults = value;
    },
    [TOTAL_RESULTS_LAST_MONTH](state, value) {
      state.totalResultsLastMonth = value;
    },
    [GAMES_RELEASED](state, value) {
      state.gamesReleased = value;
    },
  },
  actions: {
    async searchGamesLastMonth({ commit, dispatch }) {
      try {
        let dates = '';
        // eslint-disable-next-line no-return-assign
        await dispatch('getLastMonthDates').then((dates2) => dates = dates2);
        const data = await axios.get(`games?dates=${dates}&ordering=-released`);
        console.log(data, dates);
        commit(TOTAL_RESULTS_LAST_MONTH, data.count);
      } catch (error) {
        console.log(error);
      }
    },
    async searchGamesCreatedAll({ commit, getters }) {
      const { gamesPerPage, currentPage } = getters;
      try {
        const data = await axios.get(`games?page_size=${gamesPerPage}&ordering=-rating&page=${currentPage}`);
        commit(GAMES_RELEASED, data.results);
        commit(TOTAL_RESULTS, data.count);
      } catch (error) {
        console.log(error);
      }
    },
    getLastMonthDates() {
      const date = new Date();
      const month = date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth();
      const lastday = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
      const dates = `${date.getFullYear()}-${month}-01,${date.getFullYear()}-${month}-${lastday}`;
      return dates;
    },
    setPage({ commit }, value) {
      commit(CURRENT_PAGE, value);
    },
  },
};
export default gamesLastMonth;
