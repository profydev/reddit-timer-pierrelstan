import makeRequest from './makeRequest';

async function fetchPosts(url, posts = [], after, count = 1) {
  const { data } = await makeRequest(url, after);

  const nextPage = data.data.after;
  if (nextPage && count < 5) {
    /* eslint-disable no-param-reassign */
    const results = data.data.children.concat(await fetchPosts(url,
      posts = data.data.children,
      after = nextPage, count += 1));
    return results;
    /* eslint-disable no-param-reassign */
  }
  return posts;
}
export default fetchPosts;
