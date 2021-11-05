import { useState, useEffect } from 'react';
import LoadTheData from '../API/LoadTheData/LoadTheData';

const useFetchPosts = (subreddit) => {
  const [Posts, setPosts] = useState([]);
  const [status, setStatus] = useState('pending');

  useEffect(() => {
    /* eslint-disable */
    const url =`https://www.reddit.com/r/${subreddit}/top.json?t=year&limit=100`;

    setStatus('pending');
    LoadTheData(url)
      .then((newPosts) => {
        setPosts([]);
        setPosts(newPosts);
        setStatus('resolved');
      })
      .catch(() => {
        setStatus('rejected');
        setPosts([]);
      })
  }, [subreddit]);
  return {
    isLoading: status === 'pending',
    hasError: status === 'rejected',
    Posts,
    setStatus,
  };
};

export default useFetchPosts;
