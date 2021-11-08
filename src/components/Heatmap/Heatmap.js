import React from 'react';
// import PropTypes from 'prop-types';
// import * as S from './Heatmap.style';

export default function HeatmapSection() {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>`&quot;`</th>
            <th>12:00am</th>
            <th>2:00am</th>
            <th>4:00am</th>
            <th>6:00am</th>
            <th>8:00am</th>
            <th>10:00am</th>
            <th>12:00pm</th>
            <th>2:00pm</th>
            <th>4:00pm</th>
            <th>6:00pm</th>
            <th>8:00pm</th>
            <th>10:00pm</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Sunday</th>
            <td>1</td>
            <td>3</td>
            <td>6</td>
            <td>1</td>
            <td>1</td>
            <td>7</td>
            <td>9</td>
            <td>8</td>
            <td>9</td>
            <td>3</td>
            <td>1</td>
            <td>1</td>
            <td>7</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>

          </tr>
          <tr>
            <th>Monday</th>
          </tr>
          <tr>
            <th>Tuesday</th>
          </tr>
          <tr>
            <th>Wednesday</th>
          </tr>
          <tr>
            <th>Thursday</th>
          </tr>
          <tr>
            <th>Friday</th>
          </tr>
          <tr>
            <th>Saturday</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

// HeatmapSection.defaultsProps = {
//   Posts: [],
//   isLoading: false,
//   hasError: false,
// };

// HeatmapSection.propTypes = {
//   Posts: PropTypes.arrayOf(PropTypes.object).isRequired,
//   isLoading: PropTypes.bool.isRequired,
//   hasError: PropTypes.bool.isRequired,
// };
