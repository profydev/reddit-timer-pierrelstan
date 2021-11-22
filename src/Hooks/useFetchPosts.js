import { useState, useEffect } from 'react';
import axios from 'axios';
import { fetchPaginatedPosts, groupPostsPerDayAndHour } from '../API/LoadTheData/FetchPaginatedPosts';

const useFetchPosts = (subreddit) => {
  const [postsPerDay, setPostsPerDay] = useState([]);
  const [status, setStatus] = useState('pending');

  useEffect(() => {
    let unmounted = false;
    const source = axios.CancelToken.source();
    /* eslint-disable */
    const url =`https://www.reddit.com/r/${subreddit}/top.json?t=year&limit=100`;

    setStatus('pending');
    fetchPaginatedPosts(url, source)
    .then((posts) => groupPostsPerDayAndHour(posts))
      .then(({postsPerDay}) => {
        if(!unmounted){
          setPostsPerDay(postsPerDay);
          setStatus('resolved');
        }
      })
      .catch((error) => {
        if (!unmounted) {
          setStatus('rejected');
          setPostsPerDay([]);
          if (axios.isCancel(error)) {
            console.log(`request cancelled:${error.message}`);
        } else {
            console.log("another error happened:" + error.message);
        }
        }
      })
      return () => {
        unmounted = true;
        source.cancel("cancel request!!");
      }
  }, [subreddit]);
  return {
    isLoading: status === 'pending',
    hasError: status === 'rejected',
    postsPerDay
  };
};

export default useFetchPosts;
