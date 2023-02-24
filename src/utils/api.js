import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://elice.iptime.org:5500',
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

instance.interceptors.response.use(
  response => response,
  error => {
    if (error?.response?.status === 401) {
      localStorage.removeItem('Auth');
      // 인증되지 않은 유저의 경우 로그인 페이지로 리다이렉트 처리
      location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default instance;
