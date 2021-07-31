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
    wrapper.update();
    const select = wrapper.find('option').at(1);
    expect(select.text()).toEqual('HBO');
  });
  it('should list selected channels and have correct price', async () => {
    await wrapper.update();

    const formControl = wrapper.find('FormControl').at(0);

    await act(async () => {
      formControl.simulate('change', { target: { value: 'Cinemax' } });
    });

    await wrapper.update();

    expect(wrapper.find('ToastBody').length).toBe(1);
    expect(wrapper.find('.navbar-text').text()).toBe('$5');
  });
});
