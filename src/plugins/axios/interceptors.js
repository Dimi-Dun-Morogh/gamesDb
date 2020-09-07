function returnData(res) {
  return res.data;
}

function setAuthToken(config) {
  const customConfig = { ...config };
  const token = localStorage.getItem(process.env.VUE_APP_LS_TOKEN_KEY);
  customConfig.headers.Authorization = `Bearer ${token}`;
  return customConfig;
}

export default function (axios) {
  axios.interceptors.response.use(returnData);
  axios.interceptors.request.use(setAuthToken);
}
