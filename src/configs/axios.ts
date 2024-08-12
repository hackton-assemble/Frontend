import axios, { AxiosError } from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' },
});

api.interceptors.response.use(
  (res) => res,
  (err: AxiosError) => {
    if (err.response) {
      console.error('API Response Error: ', err.response.data);
      const status = err.response.status;

      if (status === 400) {
        alert('Bad Request');
      } else if (status === 404) {
        alert('Not Found');
      } else if (status === 500) {
        alert('Internal Server Error');
      } else {
        alert('오류가 발생했습니다.');
      }
    } else if (err.request) {
      console.error('No Response: ', err.message);
      alert('서버 응답이 없습니다.');
    } else {
      console.error('API Request Error', err.message);
      alert('요청에 실패했습니다.');
    }

    return Promise.reject(err);
  },
);

export default api;
