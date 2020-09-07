import axios from 'axios';
import interceptors from './interceptors';

const instance = axios.create({
  baseURL: process.env.VUE_APP_RAWG_API_URL,
});
interceptors(instance);

export default instance;
