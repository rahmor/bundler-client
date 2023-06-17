import React from 'react';
import { render, fireEvent, screen, cleanup } from '@testing-library/react';
import App from '../components/App/App';
import AppNavBar from '../components/Headers/AppNavBar';
import { MemoryRouter } from 'react-router-dom';

describe('AppNavHeader component', () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it('should not display menu', () => {
    const login = screen.queryByText(/Log In/i);
    expect(login).not.toBeInTheDocument();
  });

  it('should display two links when user-circle icon in clicked', () => {
    const userCircle = screen.getByTestId('user-circle');
    fireEvent.click(userCircle);
    const login = screen.queryByText(/Log In/i);
    const signUp = screen.queryByText(/Sign Up/i);
    expect(login).toBeInTheDocument();
    expect(signUp).toBeInTheDocument();
  });
})

describe('Logged In AppNavHeader component', () => {
  it('should show Log Out in hamburger menu when token is in localStorage', () => {
    window.localStorage.setItem('bundler-auth-token', 123456);
    const { getByTestId, queryByText, unmount } = render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    const userCircle = getByTestId('user-circle');
    fireEvent.click(userCircle);
    const logout = queryByText(/Log Out/i);
    expect(logout).toBeInTheDocument();
    unmount();
  });
});
