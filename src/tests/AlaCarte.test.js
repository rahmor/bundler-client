import React from 'react';
import AlaCarte from '../components/AlaCarte/AlaCarte';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import AuthApiService from '../services/auth-api-services';
import { MemoryRouter } from 'react-router-dom';

jest.mock('../services/auth-api-services');

describe('AlaCarte component', () => {
  let wrapper;

  beforeEach(async () => {
    await act(async () => {
      wrapper = mount(
        <MemoryRouter initialEntries={['/alacart']}>
          <AlaCarte />
        </MemoryRouter>
      );
    });
  });
  afterEach(() => {
    wrapper.unmount();
  });

  it('should have channels to select', () => {
    AuthApiService.channelsService = () => {
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
    };

    wrapper.update();
    const select = wrapper.find('option').at(1);
    console.log(select.debug());
    expect(select.text()).toEqual('HBO');
  });
  it('should list selected channels and have correct price', () => {
    //find select options
    // select hbo option inside an act
    //update wrapper
    //make sure channel now shows
    //make sure price is correct
  });
});
