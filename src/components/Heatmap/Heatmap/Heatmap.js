import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../Spinner/Spinner';
import * as S from './Heatmap.style';

export default function Heatmap({ data, loading, error }) {
  return (
    <S.Container>
      {error && <p>No such subreddit!!</p>}
      {loading && <Spinner />}
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
