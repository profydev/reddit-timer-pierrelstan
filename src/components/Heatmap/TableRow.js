import React from 'react';
import {
  number,
  string,
} from 'prop-types';
import * as S from './PostsTable.style';
import PostsAuthor from './PostsAuthor';

export default function TableRow({
  title, url, date, score, numComments, author,
}) {
  return (
    <>
      <S.TitleColumn>
        <S.Link
          href={`${url}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
        </S.Link>
      </S.TitleColumn>
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
  title: string.isRequired,
  url: string.isRequired,
  author: string.isRequired,
  numComments: number.isRequired,
  score: number.isRequired,
  date: string.isRequired,

};
