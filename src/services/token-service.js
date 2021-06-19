import config from '../config';
import jwtDecode from 'jwt-decode';

const TokenService = {
  setToken(token) {
    window.localStorage.setItem(config.TOKEN_KEY, token);
  },
  getUserIdFromToken(token) {
    const payload = jwtDecode(token);
    const { user_id } = payload;
    return user_id;
  },
  hasAuthToken() {
    return !!TokenService.getToken();
  },
  getToken() {
    return window.localStorage.getItem(config.TOKEN_KEY);
  },
  deleteToken() {
    window.localStorage.removeItem(config.TOKEN_KEY);
  },
};

export default TokenService;
