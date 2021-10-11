import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Heatmap.style';

export default function Heatmap({ data, loading, error }) {
  return (
    <S.Container>
      {error && <p>No such subreddit!!</p>}
      {loading && (
      <S.LoadingContainer>
        <S.LoadingSpinner />
      </S.LoadingContainer>
      )}
      <p>
        {data.length}
      </p>
    </S.Container>
  );
}

Heatmap.defaultsProps = {
  data: [],
  loading: false,
  error: null,
};

Heatmap.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
};
