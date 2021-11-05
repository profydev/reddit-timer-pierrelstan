import makeRequest from './makeRequest';

async function LoadTheData(url, previousPosts = [], after = null) {
  const { data } = await makeRequest(url, after);
  const allPosts = previousPosts.concat(data.children);
  const lessThan100Posts = data && data.dist < 100;
  const moreThan100Posts = allPosts.length >= 500;
  if (lessThan100Posts || moreThan100Posts) {
    return allPosts;
  }
  return LoadTheData(url, allPosts, data.after);
}
export default LoadTheData;
