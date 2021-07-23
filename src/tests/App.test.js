import React from 'react';
import { render, fireEvent, screen, cleanup } from '@testing-library/react';
import App from '../components/App/App';
import { MemoryRouter } from 'react-router-dom';

describe('Logged Out App component', () => {
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

  it('should render without crashing', () => {
    expect(screen).toBeDefined();
  });

  it('should show Browse Channels button', () => {
    const linkElement = screen.queryByText(/Browse Channels/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('should not display menu', () => {
    const login = screen.queryByText(/Log In/i);
    expect(login).not.toBeInTheDocument();
  });

  it('should display two links when hamburger icon in clicked', () => {
    const hamburger = screen.getByTestId('hamburger-menu');
    fireEvent.click(hamburger);
    const login = screen.queryByText(/Log In/i);
    const signUp = screen.queryByText(/Sign Up/i);
    expect(login).toBeInTheDocument();
    expect(signUp).toBeInTheDocument();
  });
});

describe('Logged In App component', () => {
  it('should show Log Out in hamburger menu when token is in localStorage', () => {
    window.localStorage.setItem('bundler-auth-token', 123456);
    const { getByTestId, queryByText, unmount } = render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    const hamburger = getByTestId('hamburger-menu');
    fireEvent.click(hamburger);
    const logout = queryByText(/Log Out/i);
    expect(logout).toBeInTheDocument();
    unmount();
  });
});
