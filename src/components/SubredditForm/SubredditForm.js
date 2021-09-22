import React from 'react';
import PropTypes from 'prop-types';
import * as S from './SubredditForm.style';

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
    <S.Container>
      <S.Title>Find the best time for a subreddit</S.Title>
      <S.Form onSubmit={handleSubmit}>
        <label htmlFor="search">
          r /
          <input defaultValue={state} onChange={handleChange} />
        </label>
        <button type="submit">Search</button>
      </S.Form>
    </S.Container>
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
