import { useState, useEffect } from 'react';
import FetchPaginatedPosts from '../API/LoadTheData/FetchPaginatedPosts';

const useFetchPosts = (url = '', options = null) => {
  const [Posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const posts = [];
    setLoading(true);
    setError(null);
    setPosts([]);
    async function loadData() {
      try {
        const results = await FetchPaginatedPosts(url, posts);
        if (isMounted) {
          setPosts(results);
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
    loading, error, Posts,
  };
};

export default useFetchPosts;
