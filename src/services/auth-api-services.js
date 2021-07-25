import config from '../config';

const apiAddress =
  process.env.NODE_ENV === 'development'
    ? config.LOCAL_API_ADDRESS
    : config.LIVE_API_ADDRESS;

const AuthApiService = {
  loginService(email, password) {
    return fetch(`${apiAddress}/api/auth/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ user_email: email, user_password: password }),
    })
      .then((res) => {
        return res.ok
          ? res.json()
          : res.json().catch((err) => Promise.reject(err));
      })
      .catch((err) => {
        return err;
      });
  },
  registerService(email, password) {
    return fetch(`${apiAddress}/api/users/signup`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ user_email: email, user_password: password }),
    }).then((res) => {
      return res.ok
        ? res.json()
        : res
            .json()
            .catch((err) =>
              window.alert(
                'There is an error with server, Please try again later'
              )
            );
    });
  },
  channelsService() {
    return fetch(`${apiAddress}/api/channels`)
      .then((res) => {
        return res.ok
          ? res.json()
          : res.json().catch((err) => Promise.reject(err));
      })
      .catch((err) => {
        return err;
      });
  },
};

export default AuthApiService;
