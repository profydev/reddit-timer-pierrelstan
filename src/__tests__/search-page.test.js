import React from 'react';
import {
  render, screen, waitFor, within,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

    expect(await screen.findByTestId('heatmap')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByText('loading-spinner.svg')).not.toBeInTheDocument();
    });

    const heatmap = screen.getByTestId('heatmap');
    const cells = await within(heatmap).findAllByRole('button');
    expect(cells.length).toEqual(7 * 24);

    const numberOfPostsPerCell = cells.map((cell) => cell.innerHTML);
    expect(numberOfPostsPerCell).toMatchSnapshot();

    const timezone = screen.getByText('All times are shown in your timezone:');
    expect(within(timezone).getByText('America/Santo_Domingo')).toBeInTheDocument();
  });

  test('cell highlights on click', async () => {
    const route = '/search/reactjs';

    setup(<App />, { route });

    const heatmap = await screen.findByTestId('heatmap');
    const cells = await within(heatmap).findAllByRole('button');

    const cellToClick = cells[1];
    expect(cellToClick).toHaveStyle('border: none');

    userEvent.click(cellToClick);
    expect(cellToClick).toHaveStyle('border: 1px solid #1e2537');
  });
});
