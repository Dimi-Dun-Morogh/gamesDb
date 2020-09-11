import mutations from '@/store/mutations';
import axios from '@/plugins/axios';

const { FAVORITE_GAMES } = mutations;

const favsStore = {
  namespaced: true,
  state: {
    favoriteGames: [],
  },
  getters: {
    favoriteGames: ({ favoriteGames }) => favoriteGames,
    isItInFavs: ({ favoriteGames }) => (id) => favoriteGames.filter((obj) => obj.id === id),
  },
  mutations: {
    FAVORITE_GAMES(state, value) {
      state.favoriteGames = value;
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
      console.log(favs);
      commit(FAVORITE_GAMES, favs);
    },
  },
};

export default favsStore;
