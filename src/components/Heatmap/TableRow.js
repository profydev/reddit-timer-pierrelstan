import React from 'react';
import {
  number,
  string,
} from 'prop-types';
import * as S from './PostsTable.style';
import PostsAuthor from './PostsAuthor';

export default function TableRow({
  date, score, numComments, author,
}) {
  return (
    <>
      <S.Column>{date}</S.Column>
      <S.Column>{score}</S.Column>
      <S.Column>{numComments}</S.Column>
      <S.AuthorColumn>
        <PostsAuthor author={author} />
      </S.AuthorColumn>

    </>
  );
}

TableRow.propTypes = {
  author: string.isRequired,
  numComments: number.isRequired,
  score: number.isRequired,
  date: string.isRequired,
};
