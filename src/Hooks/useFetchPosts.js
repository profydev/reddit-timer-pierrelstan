import { useState, useEffect } from 'react';
import fetchPosts from '../API/LoadTheData/FetchPosts';

const useFetchPosts = (url = '', options = null) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const posts = [];
    setLoading(true);
    setError(null);
    async function loadData() {
      try {
        const results = await fetchPosts(url, posts);
        if (isMounted) {
          setData(results);
          setLoading(false);
          setError(null);
        }
      } catch (err) {
        setError(err);
        setLoading(false);
        setData([]);
      }
    }
    loadData();
    return () => {
      isMounted = false;
    };
  }, [url, options]);

  return {
    loading, error, data,
  };
};

export default useFetchPosts;
