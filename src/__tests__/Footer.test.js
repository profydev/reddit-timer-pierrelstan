import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom/cjs/react-router-dom.min';
import userEvent from '@testing-library/user-event';
import App from '../App';

const setup = (initialPath = '/') => {
  render(
    <MemoryRouter initialEntries={[initialPath]}>
      <App />
    </MemoryRouter>,
  );

  const footer = screen.getByRole('contentinfo');
  return { footer };
};

describe('Testing Footer links', () => {
  test('link profy.dev should have url poofy.dev/employers ', () => {
    const { footer } = setup();

    const profyLink = within(footer).getByRole('link', { name: /profy.dev/i });

    expect(profyLink.getAttribute('href')).toEqual('https://profy.dev/employers');
  });

  test('navigates to home page when logo is clicked', () => {
    const { footer } = setup('/search/javascript');
    const logoLink = within(footer).getByRole('link', { name: /sign.svg/i });
    userEvent.click(logoLink);
    expect(screen.getByText(/no reactions to your reddit posts/i)).toBeInTheDocument();
  });

  test('link terms & privacy should point to /terms', () => {
    const { footer } = setup('/search/javascript');

    const termsLink = within(footer).getByRole('link', { name: /terms & privacy/i });
    userEvent.click(termsLink);
  });
});
