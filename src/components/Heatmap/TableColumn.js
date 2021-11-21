import React from 'react';
import {
  number,
  string,
} from 'prop-types';
import TableRow from './TableRow';
import * as S from './PostsTable.style';

export default function TableColumn({
  title, url, author, numComments, score, date,
}) {
  return (
    <S.Row key={url}>
      {/* <TableTitleRow title={title} url={url} /> */}
      <TableRow
        title={title}
        url={url}
        date={date}
        score={score}
        numComments={numComments}
        author={author}
      />
    </S.Row>
  );
}

TableColumn.propTypes = {
  title: string.isRequired,
  author: string.isRequired,
  numComments: number.isRequired,
  score: number.isRequired,
  date: string.isRequired,
  url: string.isRequired,
};
