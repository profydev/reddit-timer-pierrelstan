import React from 'react';
import PropTypes from 'prop-types';
import * as S from './SubredditForm.style';

function SubredditForm({
  search,
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
        <S.Label>
          r /
          <S.Input name="search" type="text" value={search} onChange={handleChange} />
        </S.Label>
        <S.Button type="submit">Search</S.Button>
      </S.Form>
    </S.Container>
  );
}

SubredditForm.propTypes = {
  search: PropTypes.string.isRequired,
  handleChangeState: PropTypes.func.isRequired,
  handleSubmitState: PropTypes.func.isRequired,
};
export default SubredditForm;
