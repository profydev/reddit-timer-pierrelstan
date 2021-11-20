import React, { memo } from 'react';
import { func, number, instanceOf } from 'prop-types';
import * as S from './HeatmapRow.style';

const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const HeatmapRow = memo(({
  day,
  postsPerHour,
  onClickHour,
  selectedHour,
}) => (
  <S.Container>
    <S.Weekday>{weekdays[day]}</S.Weekday>

    {
        postsPerHour.map((posts, hour) => (
          <S.Hour
            // eslint-disable-next-line react/no-array-index-key
            key={hour}
            numPosts={posts.length}
            onClick={() => onClickHour({ day, hour })}
            selected={hour === selectedHour}
            type="button"
          >
            {posts.length}
          </S.Hour>
        ))
      }
  </S.Container>
));

HeatmapRow.propTypes = {
  day: number.isRequired,
  postsPerHour: instanceOf(Array).isRequired,
  onClickHour: func.isRequired,
  selectedHour: number,
};

HeatmapRow.defaultProps = {
  selectedHour: null,
};

export default HeatmapRow;
