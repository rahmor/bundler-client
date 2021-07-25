import React from 'react';
import AlaCarte from '../components/AlaCarte/AlaCarte';
import { mount } from 'enzyme';
import AuthApiService from '../services/auth-api-services';
jest.mock('../services/auth-api-services');

describe('AlaCarte component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<AlaCarte />);
  });

  afterEach(() => {
    wrapper.unmount();
  });
  it('should have channels to select', () => {
    AuthApiService.channelsService = jest.mock(() => {
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
    });
    expect(AuthApiService.channelsService).toHaveBeenCalled();
    //mock api Service
    //return data from mock
    //make sure data in mock is called.
  });
  it('should list channels if they are selected', () => {});
  it('should have correct total for channels selected', () => {});
});
