import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom/cjs/react-router-dom.min';
import { ThemeProvider } from 'styled-components';
import userEvent from '@testing-library/user-event';
import theme from '../../utils/theme';
import Footer from './Footer';
import App from '../../App';

const setup = () => {
  render(
    <ThemeProvider theme={theme}>
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    </ThemeProvider>,
  );
};

const setupSvg = (initialPath = '/') => {
  let Testhistory;
  let Testlocation;

  render(
    <MemoryRouter initialEntries={[initialPath]}>
      <App />
      <Route
        path="*"
        render={({ history, location }) => {
          Testhistory = history;
          Testlocation = location;
          return null;
        }}
      />
    </MemoryRouter>,
  );
  return { Testhistory, Testlocation };
};

describe('Testing Footer links', () => {
  test('link profy.dev should have url poofy.dev/employers ', () => {
    setup();
    expect(
      screen.getByText(/profy.dev/i).closest('a'),
    ).toHaveAttribute('href', 'https://profy.dev/employers');
  });

  test('navigates to home page when logo is clicked', () => {
    setupSvg();
    const logoLink = screen.getByRole('link', { name: /sign.svg/i });
    userEvent.click(logoLink);
    expect(screen.getByText(/no reactions to your reddit posts/i)).toBeInTheDocument();
  });

  test('link terms & privacy should point to /terms ', () => {
    setup();
    expect(
      screen.getByText(/terms & privacy/i).closest('a'),
    ).toHaveAttribute('href', '/terms');
  });
});
