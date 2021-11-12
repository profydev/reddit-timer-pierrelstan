import { useState, useEffect } from 'react';
import { fetchPaginatedPosts, groupPostsPerDayAndHour } from '../API/LoadTheData/FetchPaginatedPosts';

const useFetchPosts = (subreddit) => {
  const [postsPerDay, setPostsPerDay] = useState([]);
  const [status, setStatus] = useState('pending');

  useEffect(() => {
    /* eslint-disable */
    const url =`https://www.reddit.com/r/${subreddit}/top.json?t=year&limit=100`;

    setStatus('pending');
    fetchPaginatedPosts(url)
    .then((posts) => groupPostsPerDayAndHour(posts))
      .then((newpostsPerDay) => {
        setPostsPerDay(newpostsPerDay);
        setStatus('resolved');
      })
      .catch(() => {
        setStatus('rejected');
        setPostsPerDay([]);
      })
  }, [subreddit]);
  return {
    isLoading: status === 'pending',
    hasError: status === 'rejected',
    postsPerDay
  };
};

export default useFetchPosts;
