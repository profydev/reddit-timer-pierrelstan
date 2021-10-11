import makeRequest from './makeRequest';

async function fetchPaginatedPosts(url, posts = [], after) {
  let newAfter = after;
  const { data } = await makeRequest(url, newAfter);
  newAfter = data.data.after;

  const combinedPosts = posts.concat(data.data.children);
  const noMorePosts = data && data.dist < 100;
  const limitReached = combinedPosts.length >= 500;

  if (noMorePosts || limitReached) {
    return combinedPosts;
  }
  return fetchPaginatedPosts(url, combinedPosts, newAfter);
}
export default fetchPaginatedPosts;
