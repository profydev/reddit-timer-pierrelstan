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
    expect(within(timezone).getByText('Europe/Berlin')).toBeInTheDocument();
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

// Posts Table
async function clickFirstCellWithValue(value) {
  const heatmap = await screen.findByTestId('heatmap');
  const cell = within(heatmap).getAllByText(value)[0];
  userEvent.click(cell);
}

describe('posts table', () => {
  test('is not visible when no cell is clicked', async () => {
    const route = '/search/reactjs';

    setup(<App />, { route });
    await screen.queryByTestId('heatmap');

    expect(screen.queryByRole('table')).not.toBeInTheDocument();
  });

  test('is not visible when cell with no posts is clicked', async () => {
    const route = '/search/reactjs';

    setup(<App />, { route });
    await clickFirstCellWithValue('0');

    expect(screen.queryByRole('table')).not.toBeInTheDocument();
  });

  test('shows posts ordered by time according to cell that is clicked', async () => {
    const route = '/search/reactjs';

    setup(<App />, { route });
    await clickFirstCellWithValue('4');

    const table = screen.getByRole('table');
    const tableRows = within(table)
      .getAllByRole('row')
      .slice(1);

    const tableContent = tableRows.map((row) => {
      const cells = within(row).getAllByRole('cell');
      const titleLink = within(cells[0]).getByRole('link');
      const authorLink = within(cells[4]).getByRole('link');
      return {
        title: titleLink.innerHTML,
        href: titleLink.href,
        time: cells[1].innerHTML,
        score: cells[2].innerHTML,
        numComments: cells[3].innerHTML,
        author: authorLink.innerHTML,
        authorHref: authorLink.href,
      };
    });

    expect(tableContent).toMatchSnapshot();
  });

  test('shows no link for deleted user', async () => {
    const route = '/search/reactjs';

    setup(<App />, { route });

    const heatmap = await screen.findByTestId('heatmap');

    const sunday5pm = within(heatmap).getAllByText('7')[0];

    userEvent.click(sunday5pm);
    const table = screen.getByRole('table');

    const rowWithDeletedUser = within(table).getAllByRole('row')[2];

    const authorCell = within(rowWithDeletedUser).getAllByRole('cell')[4];

    expect(within(authorCell).queryByRole('link')).not.toBeInTheDocument();
    expect(authorCell.innerHTML).toBe('[deleted]');
  });
});
