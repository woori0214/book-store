import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://elice.iptime.org:8080',
});

instance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('Auth');
    console.log(token);
    try {
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }

      return config;
    } catch (error) {
      console.log('jwt 토큰이 없거나 jwt 토큰의 유효기간이 지났습니다.');
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default instance;
