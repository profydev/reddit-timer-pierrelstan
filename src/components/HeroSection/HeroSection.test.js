import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom/cjs/react-router-dom.min';
import userEvent from '@testing-library/user-event';
import App from '../../App';

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

  test('Should contains  a title and  a subtile ', () => {
    setup();
    const title = screen.getByText(/No reactions to your reddit posts/i);
    const subTitle = screen.getByText(/Great timing, great results. Find the best time to post on your subreddit/i);
    expect(
      title.closest('h1'),
    ).toBeInTheDocument();
    expect(
      subTitle.closest('h3'),
    ).toBeInTheDocument();
  });
  test('navigates to Search page when table Image is clicked', () => {
    setup();
    const tableLink = screen.getByRole('link', { name: /table.svg/i });
    userEvent.click(tableLink);
    expect(screen.getByText(/find the best time for a subreddit/i)).toBeInTheDocument();
  });
});
