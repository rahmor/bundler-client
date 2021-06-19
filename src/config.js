const config = {
  apiAddress() {
    let address =
      process.env.NODE_ENV === 'development'
        ? config.LOCAL_API_ADDRESS
        : config.LIVE_API_ADDRESS;
    return address;
  },
  LIVE_API_ADDRESS: 'https://blooming-forest-60129.herokuapp.com',
  LOCAL_API_ADDRESS: 'http://localhost:8000',
  TOKEN_KEY: 'bundler-auth-token',
};

export default config;
