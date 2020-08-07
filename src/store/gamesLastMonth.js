import axios from '@/plugins/axios';
import mutations from './mutations';

const {
  CURRENT_PAGE, CURRENT_QUERY, TOTAL_RESULTS, GAMES_LAST_MONTH,
} = mutations;
const gamesLastMonth = {
  namespaced: true,
  state: {
    gamesLastMonth: [],
    gamesPerPage: 5,
    currentPage: 1,
    totalResults: 0,
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
    [GAMES_LAST_MONTH](state, value) {
      state.gamesLastMonth = value;
    },
  },
  actions: {
    async searchGamesLastMonth({ commit, dispatch }) {
      try {
        const dates = dispatch('getLastMonthDates');
        const data = await axios.get(`games?dates=${dates}&ordering=-released`);
        commit(GAMES_LAST_MONTH, data);
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
  },
};
export default gamesLastMonth;
