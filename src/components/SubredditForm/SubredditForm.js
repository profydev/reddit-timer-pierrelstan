import React from 'react';
import PropTypes from 'prop-types';

function SubredditForm({
  state,
  handleChangeState,
  handleSubmitState,
}) {
  const handleChange = (e) => {
    handleChangeState(e);
  };

  const handleSubmit = (e) => {
    handleSubmitState(e);
  };
  return (
    <div>
      <h1>Find the best time for a subreddit</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">
          r /
          <input defaultValue={state} onChange={handleChange} />
        </label>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
SubredditForm.defaultProps = {
  state: '',
  handleChangeState: () => '',
  handleSubmitState: () => '',
};

SubredditForm.propTypes = {
  state: PropTypes.string,
  handleChangeState: PropTypes.func,
  handleSubmitState: PropTypes.func,
};
export default SubredditForm;
