import React from 'react';

function SubredditForm() {
  const handleChange = () => {
  };

  const handleSubmit = () => {
  };

  return (
    <div>
      <h1>Find the best time for a subreddit</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">
          r /
          <input defaultValue="" onChange={handleChange} />
        </label>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
export default SubredditForm;
