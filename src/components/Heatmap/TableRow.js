import React from 'react';
import {
  number,
  string,
} from 'prop-types';
import * as S from './PostsTable.style';

export default function TableRow({
  date, score, numComments, author,
}) {
  return (
    <>
      <td>{date}</td>
      <td>{score}</td>
      <td>{numComments}</td>

      <td>
        {author !== '[deleted]'
          ? (
            <S.Link
              href={`https://reddit.com/u/${author}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {author}
            </S.Link>
          )
          : author}
      </td>
    </>
  );
}

TableRow.propTypes = {
  author: string.isRequired,
  numComments: number.isRequired,
  score: number.isRequired,
  date: string.isRequired,
};
