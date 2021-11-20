import React from 'react';
import {
  string,
} from 'prop-types';
import * as S from './PostsTable.style';

export default function PostsAuthor({ author }) {
  if (author === '[deleted]') {
    return author;
  }
  return (
    <S.Link
      href={`https://reddit.com/u/${author}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {author}
    </S.Link>
  );
}
PostsAuthor.propTypes = {
  author: string.isRequired,
};
