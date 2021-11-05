import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Heatmap.style';

export default function Heatmap({ isLoading, hasError, Posts }) {
  return (
    <S.Container>
      {hasError && (
      <S.ErrorContainer>
        {' '}
        Something went wrong.
      </S.ErrorContainer>
      )}
      {isLoading && (
      <S.LoadingContainer>
        <S.LoadingSpinner data-testid="loading" />
      </S.LoadingContainer>
      )}
      <div data-testid="500-posts">
        {Posts.length}
      </div>
    </S.Container>
  );
}

Heatmap.defaultsProps = {
  Posts: [],
  isLoading: false,
  hasError: false,
};

Heatmap.propTypes = {
  Posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool.isRequired,
  hasError: PropTypes.bool.isRequired,
};
