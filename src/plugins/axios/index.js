import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.VUE_APP_RAWG_API_URL,
});
// baseURL: process.env.VUE_APP_MOVIE_API_URL,
export default instance;
