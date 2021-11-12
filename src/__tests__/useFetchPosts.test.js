// import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import useFetchPosts from '../Hooks/useFetchPosts';

const getNumPosts = (nestedPostsArray) => nestedPostsArray.reduce(
  (numTotal, postsPerDay) => postsPerDay.reduce(
    (numPerDay, postsPerHour) => numPerDay + postsPerHour, numTotal,
  ),
  0,
);

describe('Testing useFetchPosts', () => {
  it('It fetch 500 top posts from the reddit API', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchPosts('500-posts'));
    expect(result.current.postsPerDay).toEqual([]);

    expect(result.current.isLoading).toBe(true);

    await waitForNextUpdate();

    expect(getNumPosts(result.current.postsPerDay)).toEqual(500);

    expect(await result.current.isLoading).toBe(false);
    expect(result.current.postsPerDay).toMatchSnapshot();
  });

  test('returns less than 500 posts', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchPosts('less-than-500-posts'));

    await waitForNextUpdate();

    expect(result.current.isLoading).toBe(false);
    expect(getNumPosts(result.current.postsPerDay)).toEqual(270);
  });

  test('returns error when a request fails', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchPosts('failing-request'));

    await waitForNextUpdate();

    expect(result.current.isLoading).toBe(false);
    expect(result.current.hasError).toEqual(true);
  });
});
