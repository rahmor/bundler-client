import React from 'react';
import { mount } from 'enzyme';
import Login from '../components/Users/Login';
import AuthApiService from '../services/auth-api-services';
import TokenService from '../services/token-service';
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router-dom';
jest.mock('../services/auth-api-services');
jest.mock('../services/token-service');

let setToken = jest.fn();
let history = { push: jest.fn() };

let wrapper;

describe('LogIn component', () => {
  beforeEach(async () => {
    await act(async () => {
      wrapper = mount(
        <MemoryRouter initialEntries={['/login']}>
          <Login setToken={setToken} history={history} />
        </MemoryRouter>
      );
    });
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('should show an error if Token is undefined', async () => {
    let submitButton = wrapper.find('Button');

    await act(async () => {
      submitButton.simulate('submit', {
        target: {
          email: { value: 'jane@doe.com' },
          password: { value: 123456 },
        },
      });
    });

    await wrapper.update();

    const error = wrapper.find('.text-danger');
    expect(error).toHaveLength(1);
  });

  it('should show an error if server responds with error', async () => {
    AuthApiService.loginService = () => {
      return Promise.resolve({ error: 'server error' });
    };

    let submitButton = wrapper.find('Button');

    await act(async () => {
      submitButton.simulate('submit', {
        target: {
          email: { value: 'jane@doe.com' },
          password: { value: 123456 },
        },
      });
    });

    await wrapper.update();
    const error = wrapper.find('.text-danger');
    expect(error).toHaveLength(1);
  });

  it('should call setToken', async () => {
    AuthApiService.loginService = () => {
      return Promise.resolve({ authToken: 123456 });
    };

    TokenService.getUserIdFromToken = jest.fn(() => 1);

    let submitButton = wrapper.find('Button');

    await act(async () => {
      submitButton.simulate('submit', {
        target: {
          email: { value: 'jane@doe.com' },
          password: { value: 123456 },
        },
      });
    });

    await wrapper.update();
    expect(setToken).toHaveBeenCalled();
  });

  jest.unmock('../services/auth-api-services');
});
