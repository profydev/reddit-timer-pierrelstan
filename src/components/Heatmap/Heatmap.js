import React from 'react';
import {
  func,
  number,
  shape,
  instanceOf,
} from 'prop-types';
import HeatmapHeaderRow from './HeatmapHeaderRow';
import HeatmapRow from './HeatmapRow';
import * as S from './Heatmap.style';

function Heatmap({ postsPerDay, onClickHour, selectedDayAndHour }) {
  return (
    <S.Container data-testid="heatmap">
      <HeatmapHeaderRow />

      {postsPerDay.map((postsPerHour, day) => (
        <HeatmapRow
            // eslint-disable-next-line react/no-array-index-key
          key={day}
          day={day}
          postsPerHour={postsPerHour}
          onClickHour={onClickHour}
          selectedHour={selectedDayAndHour.day === day ? selectedDayAndHour.hour : null}
        />
      ))}

      <S.TimezoneWrapper>
        All times are shown in your timezone:
        {' '}
        <S.Timezone>{Intl.DateTimeFormat().resolvedOptions().timeZone}</S.Timezone>
      </S.TimezoneWrapper>
    </S.Container>
  );
}

Heatmap.propTypes = {
  postsPerDay: instanceOf(Array).isRequired,
  onClickHour: func.isRequired,
  selectedDayAndHour: shape({
    day: number,
    hour: number,
  }).isRequired,
};

export default Heatmap;
