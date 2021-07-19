import axios from 'axios';

function sleep(ms = 1000): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const api = axios.create({
  baseURL: 'http://localhost:3000/',
  validateStatus: () => true,
});

api.interceptors.response.use(async response => {
  // add artificial delay for dev env
  if (process.env.NODE_ENV === 'development') {
    await sleep();
  }

  return response;
});

export default api;
