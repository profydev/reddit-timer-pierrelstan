import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Heatmap.style';

export default function Heatmap({ Posts, loading, error }) {
  return (
    <S.Container>
      {error && (
      <S.ErrorContainer>
        {' '}
        Something went wrong.
        Please check the subreddit you entered and try again.
      </S.ErrorContainer>
      )}
      {loading && (
      <S.LoadingContainer>
        <S.LoadingSpinner />
      </S.LoadingContainer>
      )}
      <p>
        {Posts.length}
      </p>
    </S.Container>
  );
}

Heatmap.defaultsProps = {
  Posts: [],
  loading: false,
  error: null,
};

Heatmap.propTypes = {
  Posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
};
