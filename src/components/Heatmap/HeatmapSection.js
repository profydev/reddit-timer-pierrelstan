import React from 'react';
import PropTypes from 'prop-types';
import Heatmap from './Heatmap';
import * as S from './Heatmap.style';

export default function HeatmapSection({
  isLoading, hasError, postsPerDay, selectedDayAndHour, setSelectedDayAndHour,
}) {
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
      <Heatmap
        postsPerDay={postsPerDay}
        selectedDayAndHour={selectedDayAndHour}
        onClickHour={setSelectedDayAndHour}
        data-testid="heatmap"
      />
    </S.Container>
  );
}

HeatmapSection.defaultsProps = {
  postsPerDay: [],
  isLoading: false,
  hasError: false,
  selectedDayAndHour: {},
  setSelectedDayAndHour: () => {},
};

HeatmapSection.propTypes = {
  postsPerDay: PropTypes.instanceOf(Array).isRequired,
  isLoading: PropTypes.bool.isRequired,
  hasError: PropTypes.bool.isRequired,
  selectedDayAndHour: PropTypes.objectOf(PropTypes.any).isRequired,
  setSelectedDayAndHour: PropTypes.func.isRequired,
};
