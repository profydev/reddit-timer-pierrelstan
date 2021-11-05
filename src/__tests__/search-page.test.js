import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'history';
import App from '../App';

const setup = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);
  return render(ui, { wrapper: BrowserRouter });
};

describe('Testing Search Page', () => {
  test('renders error message', async () => {
    const route = '/search/failing-request';

    setup(<App />, { route });
    await waitFor(async () => {
     expect(await screen.findByText(/something went wrong/i)).toBeInTheDocument();
    });
  });

  test('loads top posts for subreddit in URL', async () => {
    const route = '/search/reactjs';

    setup(<App />, { route });

    screen.queryByText('loading-spinner.svg');

    await waitFor(async () => {
      expect(await screen.queryByTestId('500-posts')).toHaveTextContent(500);
    });
    await waitFor(async () => {
      expect(await screen.queryByText('loading-spinner.svg')).not.toBeInTheDocument();
    });
  });
});
