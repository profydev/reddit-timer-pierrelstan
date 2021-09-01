import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { ThemeProvider } from 'styled-components';
import theme from '../../utils/theme';

import Footer from './Footer';

const setup = () => {
  render(
    <ThemeProvider theme={theme}>
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    </ThemeProvider>
  );
};

describe('Testing Footer links', () => {
  test('navigates to profy.dev/employers when profy.dev is clicked', () => {
    setup();
    expect(
      screen.getByText(/profy.dev/i).closest('a')
    ).toHaveAttribute('href', 'https://profy.dev/employers');
  });

  test('navigates to home when logo is clicked', () => {
    setup();
    expect(
      screen.getByText(/logo.svg/i).closest('a')
    ).toHaveAttribute('href', '/');
  });

  test('navigates to terms  page when Terms & Privacy link is clicked', () => {
    setup();
    expect(
      screen.getByText(/terms & privacy/i).closest('a')
    ).toHaveAttribute('href', '/terms');
  });
});
