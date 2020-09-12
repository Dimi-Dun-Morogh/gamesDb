import mutations from '@/store/mutations';
import axios from '@/plugins/axios';

const { FAVORITE_GAMES, ROUTE_FROM_FAVS } = mutations;

const favsStore = {
  namespaced: true,
  state: {
    favoriteGames: [],
    routeFromFavs: false,
  },
  getters: {
    favoriteGames: ({ favoriteGames }) => favoriteGames,
    isItInFavs: ({ favoriteGames }) => (id) => favoriteGames.filter((obj) => obj.id === id),
    routeFromFavs: ({ routeFromFavs }) => routeFromFavs,
  },
  mutations: {
    FAVORITE_GAMES(state, value) {
      state.favoriteGames = value;
    },
    ROUTE_FROM_FAVS(state, value) {
      state.routeFromFavs = value;
    },
  },
  actions: {
    setfavState: {
      handler({ dispatch }) {
        dispatch('fetchFavs');
      },
      root: true,
    },
    async addFavoriteGame({ commit, getters }, game) {
      const { favoriteGames } = getters;
      const updatedFavs = await axios.post('api/favorites', { favIds: [...favoriteGames, game] });
      commit(FAVORITE_GAMES, updatedFavs);
    },
    async removeFavoriteGame({ commit, getters }, id) {
      const { favoriteGames } = getters;
      const filtered = favoriteGames.filter((game) => game.id !== id);
      const updatedFavs = await axios.post('api/favorites', { favIds: filtered });
      commit(FAVORITE_GAMES, updatedFavs);
    },
    async fetchFavs({ commit }) {
      const favs = await axios.get('api/favorites');
      commit(FAVORITE_GAMES, favs);
    },
    setRouteFavs({ commit }, bool) {
      commit(ROUTE_FROM_FAVS, bool);
    },
  },
};

export default favsStore;
