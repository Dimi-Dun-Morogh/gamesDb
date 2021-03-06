import axios from '@/plugins/axios';
import mutations from './mutations';
import router from '../router/index';

const {
  CURRENT_PAGE,
  CURRENT_QUERY,
  TOTAL_RESULTS,
  TOTAL_RESULTS_LAST_MONTH,
  GAMES_RELEASED,
  SET_FILTER,
  SET_PLATFORMS,
  BG_POSTER,
  SORT_BY,
  DATES,
  SET_QUERY,
  SET_PLATFORM,
  SET_GENRE,
  SET_FILTER_STRING,
  CURRENT_GAME,
} = mutations;
const gamesLastMonth = {
  namespaced: true,
  state: {
    gamesPerPage: 8,
    currentPage: 0,
    totalResults: 0,
    totalResultsLastMonth: 0,
    gamesReleased: [],
    filter: '',
    platforms: [],
    currentGame: null,
    bgPoster: './assets/wallpaper.jpg',
    sortBy: '-rating',
    dates: '',
    query: '',
    platform: '',
    genre: '',
    filterString: '',
  },
  getters: {
    totalResults: ({ totalResults }) => totalResults,
    totalResultsLastMonth: ({ totalResultsLastMonth }) => totalResultsLastMonth,
    gamesReleased: ({ gamesReleased }) => gamesReleased,
    gamesPerPage: ({ gamesPerPage }) => gamesPerPage,
    currentPage: ({ currentPage }) => currentPage,
    filter: ({ filter }) => filter,
    platforms: ({ platforms }) => platforms,
    bgPoster: ({ bgPoster }) => bgPoster,
    sortBy: ({ sortBy }) => sortBy,
    dates: ({ dates }) => dates,
    query: ({ query }) => query,
    platform: ({ platform }) => platform,
    genre: ({ genre }) => genre,
    filterString: ({ filterString }) => filterString,
    currentGame: ({ currentGame }) => currentGame,
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
    [SET_FILTER](state, value) {
      state.filter = value;
    },
    [SET_PLATFORMS](state, value) {
      state.platforms = value;
    },
    [BG_POSTER](state, value) {
      state.bgPoster = value;
    },
    [SORT_BY](state, value) {
      state.sortBy = value;
    },
    [DATES](state, value) {
      state.dates = value;
    },
    [SET_QUERY](state, value) {
      state.query = value;
    },
    [SET_PLATFORM](state, value) {
      state.platform = value;
    },
    [SET_GENRE](state, value) {
      state.genre = value;
    },
    [SET_FILTER_STRING](state, value) {
      state.filterString = value;
    },
    [CURRENT_GAME](state, value) {
      state.currentGame = value;
    },
  },
  actions: {
    async searchGamesLastMonth({ commit, dispatch }) {
      try {
        let dates = '';
        // eslint-disable-next-line no-return-assign
        await dispatch('getLastMonthDates').then((dates2) => (dates = dates2));
        const data = await axios.get(`games?dates=${dates}&ordering=-released`);
        commit(TOTAL_RESULTS_LAST_MONTH, data.count);
      } catch (error) {
        throw new Error(error);
      }
    },
    async searchGamesCreatedAll({ commit, getters, dispatch }) {
      const {
        gamesPerPage, currentPage, sortBy, dates: theDates, query: theQuery, platform, genre,
      } = getters;
      try {
        dispatch('preloaderStore/setLoader', true, { root: true });
        let queryParams = {
          page: currentPage,
          ordering: sortBy,
          genres: genre,
          platforms: platform,
          dates: theDates,
          query: theQuery,
        };
        queryParams = Object.entries(queryParams).filter(([, value]) => value !== '');
        queryParams = Object.fromEntries(queryParams);
        router.push({
          query: {
            ...queryParams,
          },
        }).catch((err) => {
          // Ignore the vuex err regarding  navigating to the page they are already on.
          if (
            err.name !== 'NavigationDuplicated'
      && !err.message.includes('Avoided redundant navigation to current location')
          ) {
            // But print any other errors to the console
            console.log(err);
          }
        });
        const data = await axios.get(`games${(router.history.current.fullPath).slice(1)}&page_size=${gamesPerPage}`);
        console.log(router.history.current.fullPath, 'router');
        commit(GAMES_RELEASED, data.results);
        commit(TOTAL_RESULTS, data.count);
      } catch (error) {
        throw new Error(error);
      } finally {
        dispatch('preloaderStore/setLoader', false, { root: true });
      }
    },
    getLastMonthDates() {
      const date = new Date();
      const month = date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth();
      const lastday = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
      const dates = `${date.getFullYear()}-${month}-01,${date.getFullYear()}-${month}-${lastday}`;
      return dates;
    },
    async getPlatforms({ commit }) {
      try {
        const data = await axios.get('platforms');
        commit(SET_PLATFORMS, data.results);
      } catch (error) {
        throw new Error(error);
      }
    },
    setPage({ commit }, value) {
      console.log('page set in store', value);
      commit(CURRENT_PAGE, Number(value));
    },
    setFilter({ commit }, value) {
      commit(SET_FILTER, value);
    },
    setBgPoster({ commit }, value) {
      commit(BG_POSTER, value);
    },
    setSortBy({ commit }, value) {
      commit(SORT_BY, value);
    },
    setDates({ commit }, value) {
      commit(DATES, value);
    },
    setQuery({ commit }, value) {
      commit(SET_QUERY, value);
    },
    setPlatform({ commit }, value) {
      commit(SET_PLATFORM, value);
    },
    setGenre({ commit }, value) {
      commit(SET_GENRE, value);
    },
    setFilterString({ commit }, value) {
      commit(SET_FILTER_STRING, value);
    },
    setCurrentGame({ commit }, value) {
      commit(CURRENT_GAME, value);
    },
  },
};
export default gamesLastMonth;
