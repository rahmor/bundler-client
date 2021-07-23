let AuthApiService = jest.createMockFromModule('../auth-api-services');

AuthApiService = {
  __esModule: true,
  default: async () => {
    return Promise.resolve({ authToken: undefined });
  },
  loginService: async () => {
    return Promise.resolve({ authToken: undefined });
  },
};

export default AuthApiService;
