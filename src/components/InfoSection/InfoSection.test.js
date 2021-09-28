import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom/cjs/react-router-dom.min';
import App from '../../App';

const setup = (initialPath = '/') => {
  let history;
  render(
    <MemoryRouter initialEntries={[initialPath]}>
      <App />
      <Route
        path="*"
        render={(props) => {
          history = props.history;
          return null;
        }}
      />
    </MemoryRouter>,
  );
  return { history };
};

describe('InfoSection', () => {
  test('links points to home and employers page ', () => {
    setup();

    const aboutSection = screen.getAllByRole('article')[1];

    const profyLink = within(aboutSection).getByRole('link', { name: /profy\.dev/i });
    expect(profyLink.getAttribute('href')).toEqual('https://profy.dev');

    const moreInfoLink = within(aboutSection).getByRole('link', { name: /click here for more information/i });
    expect(moreInfoLink.getAttribute('href')).toEqual('https://profy.dev/employers');
  });
});
