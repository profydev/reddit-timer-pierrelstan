import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom/cjs/react-router-dom.min';
import App from '../App';

const setup = () => render(
  <MemoryRouter>
    <App />
  </MemoryRouter>,
);

describe('HeroSection', () => {
  test('Button should have href "search/javascript', () => {
    setup();
    expect(
      screen.getByText(/show me the best time/i).closest('a'),
    ).toHaveAttribute('href', '/search/javascript');
  });
});
