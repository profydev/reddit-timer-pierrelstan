import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { BrowserRouter } from 'history';
import { render, screen } from '@testing-library/react';
import useFetchPosts from '../Hooks/useFetchPosts';
import App from '../App';

const setup = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test Search page', route);
  return render(ui, { wrapper: BrowserRouter });
};

describe('Testing useFetchPosts', () => {
  it('It fetch 500 top posts from the reddit API', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchPosts('500-posts'));
    expect(result.current.Posts).toEqual([]);
    expect(result.current.isLoading).toBe(true);

    await waitForNextUpdate();

    expect(await result.current.Posts.length).toEqual(500);

    expect(await result.current.isLoading).toBe(false);
    const postTitles = await result.current.Posts.map(({ data }) => data.title);
    expect(postTitles).toMatchSnapshot();
  });

  test('returns less than 500 posts', async () => {
    const route = '/search/less-than-500-posts';
    setup(<App />, { route });

    screen.queryByText('loading-spinner.svg');
    expect(await screen.findByText(/270/i)).toBeInTheDocument();
  });

  test('returns error when a request fails', async () => {
    const route = '/search/failing-request';
    setup(<App />, { route });
    expect(await screen.findByText(/something went wrong/i)).toBeInTheDocument();
  });
});
