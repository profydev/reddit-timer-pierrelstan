import React from 'react';
import PropTypes from 'prop-types';
import * as S from './SubredditForm.style';
import Button from '../../common/button/index';

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
    <S.Wrapper>
      <S.Title>Find the best time for a subreddit</S.Title>
      <S.Form onSubmit={handleSubmit}>
        <S.Label>
          r /
          <S.Input name="search" type="text" value={search} onChange={handleChange} />
        </S.Label>
        <Button type="submit">Search</Button>
      </S.Form>
    </S.Wrapper>
  );
}

SubredditForm.propTypes = {
  search: PropTypes.string.isRequired,
  handleChangeState: PropTypes.func.isRequired,
  handleSubmitState: PropTypes.func.isRequired,
};
export default SubredditForm;
