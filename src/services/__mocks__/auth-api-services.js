let AuthApiService = jest.createMockFromModule('../auth-api-services');

AuthApiService = {
  __esModule: true,
  default: async () => {
    return Promise.resolve({ authToken: undefined });
  },
  loginService: async () => {
    return Promise.resolve({ authToken: undefined });
  },
  channelsService: async () => {
    return Promise.resolve({
      channels: [
        {
          id: 1,
          channel: 'HBO',
          price: 5,
          tier: 'Premium',
        },
        {
          id: 2,
          channel: 'Showtime',
          price: 5,
          tier: 'Premium',
        },
      ],
    });
  },
};

export default AuthApiService;
