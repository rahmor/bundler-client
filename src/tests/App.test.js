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

});

