import React from 'react';
import {
  render, screen,
} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom/cjs/react-router-dom.min';
import userEvent from '@testing-library/user-event';
import App from '../../App';

const setup = () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
};

describe('SubredditForm', () => {
  test('Updates URL with input value on submit', () => {
    setup();

    const SearchLink = screen.getByRole('link', { name: /search/i });

    userEvent.click(SearchLink);

    const subredditInput = screen.getByLabelText('r /');

    userEvent.clear(screen.getByRole('textbox'));

    userEvent.type(subredditInput, 'reactjs');

    const submitButton = screen.getByRole('button', { name: /search/i });

    userEvent.click(submitButton);

    const value = screen.getByLabelText('r /');

    expect(value.value).toBe('reactjs');
  });

  test('Input value updates to "javascript" when header link is clicked', () => {
    setup();

    const SearchLink = screen.getByRole('link', { name: /search/i });

    userEvent.click(SearchLink);

    const input = screen.getByLabelText('r /');

    expect(input.value).toBe('javascript');
  });
});
