import makeRequest from './makeRequest';

const NUM_POSTS_TO_FETCH = 500;
const MAX_NUM_POSTS_PER_PAGE = 100;

/**
 * The reddit endpoint that we fetch the top posts from uses pagination. We can fetch a maximum
 * number of 100 posts per page. In order to fetch the first 500 posts we use this recursive
 * function. Until the last page or the required number of posts has been reached we continue
 * to fetch more posts.
 *
 * @param {string} subreddit the name of the subreddit
 * @param {array} previousPosts the posts that have already been loaded
 *    (only to be used in recursive calls)
 * @param {string} after the id of the last post used for pagination
 *    (only to be used in recursive calls)
 * @returns {array} list of top 500 posts for subreddit
 */

async function fetchPaginatedPosts(url, source, previousPosts = [], after = null) {
  const { data } = await makeRequest(url, source, after);
  console.log(data);
  const allPosts = previousPosts.concat(data.children);
  const lessThan100Posts = data && data.dist < MAX_NUM_POSTS_PER_PAGE;
  const moreThan100Posts = allPosts.length >= NUM_POSTS_TO_FETCH;
  if (lessThan100Posts || moreThan100Posts) {
    return allPosts;
  }
  return fetchPaginatedPosts(url, source, allPosts, data.after);
}

/**
 * Builds an object containing posts per day of week and hour and title, ,date ,
 * author, url, score, numComments to create the heatmap.
 * Each entry obj[dayOfWeek][hour] contains an array of posts.
 * dayOfWeek is a number between 0 and 6, hour a number between 0 and 23.
 *
 * @param {array} posts the concatenated list of posts returned from fetchPaginatedPosts
 * @returns {array} nested 2D array that contains the number of posts grouped by week day and hour
 */
function groupPostsPerDayAndHour(posts) {
  const postsPerDay = Array(7)
    .fill()
    .map(() => Array(24).fill().map(() => []));

  posts.forEach((post) => {
    const createdAt = new Date(post.data.created_utc * 1000);
    const dayOfWeek = createdAt.getDay();
    const hour = createdAt.getHours();

    postsPerDay[dayOfWeek][hour].push({
      title: post.data.title,
      author: post.data.author,
      createdAt,
      url: `https://reddit.com${post.data.permalink}`,
      score: post.data.score,
      numComments: post.data.num_comments,
    });
  });

  return { postsPerDay };
}

export { fetchPaginatedPosts, groupPostsPerDayAndHour };
