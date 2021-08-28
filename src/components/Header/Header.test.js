import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom/cjs/react-router-dom.min';
import userEvent from '@testing-library/user-event';
import App from '../../App';

const setup = (initialPath = '/') => {
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

describe(' Testing Header Navigation', () => {
  test('navigates to home page when logo is clicked', () => {
    setup('/search/javascript');
    const logoLink = screen.getByRole('link', { name: /logo.svg/i });
    userEvent.click(logoLink);
    expect(screen.getByText(/home page/i)).toBeInTheDocument();
  });

  test('navigates to search page when search link is clicked', () => {
    const { Testhistory } = setup('/search/javascript');

    const searchLink = screen.getByRole('link', { name: /search/i });
    userEvent.click(searchLink);

    expect(screen.getByText(/search page/i)).toBeInTheDocument();
    expect(Testhistory.location.pathname).toEqual('/search/javascript');
  });

  test.each`
    link              | hash
    ${'About'}        | ${'#about'}
    ${'How it works'} | ${'#how-it-works'}
  `(
    'Navigates to the corresponding "$link" section when link is clicked',
    ({ link, hash }) => {
      const { Testhistory } = setup('/search/javscript');
      Testhistory.push(hash);
      const hashlink = screen.getByRole('link', { name: link });
      userEvent.click(hashlink);
      expect(screen.getByText(/home page/i)).toBeInTheDocument();
      expect(Testhistory.location.hash).toEqual(hash);
    },
  );
});
