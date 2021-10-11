import { useState, useEffect } from 'react';
import FetchPaginatedPosts from '../API/LoadTheData/FetchPaginatedPosts';

const useFetchPosts = (url = '', options = null) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const posts = [];
    setLoading(true);
    setError(null);
    setData([]);
    async function loadData() {
      try {
        const results = await FetchPaginatedPosts(url, posts);
        if (isMounted) {
          setData(results);
          setLoading(false);
          setError(null);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
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
