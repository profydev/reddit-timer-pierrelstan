import React from 'react';
import {
  number,
  string,
} from 'prop-types';
import TableHeaderRow from './TableHeaderRow';
import TableRow from './TableRow';
import * as S from './PostsTable.style';

export default function Table({
  title, author, numComments, score, date, url,
}) {
  return (
    <S.Row key={url}>
      <TableHeaderRow title={title} url={url} />
      <TableRow
        date={date}
        score={score}
        numComments={numComments}
        author={author}
      />
    </S.Row>
  );
}

Table.propTypes = {
  title: string.isRequired,
  author: string.isRequired,
  numComments: number.isRequired,
  score: number.isRequired,
  date: string.isRequired,
  url: string.isRequired,
};
