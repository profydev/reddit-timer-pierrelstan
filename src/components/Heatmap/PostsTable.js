import React from 'react';
import {
  arrayOf,
} from 'prop-types';
import * as S from './PostsTable.style';
import Table from './Table';

const trimString = (string) => {
  const length = 46;
  const trimmedString = string.length > length
    ? `${string.substring(0, length - 3)}...`
    : string;

  return trimmedString;
};
export default function PostsTable({ posts }) {
  const ConvertTheDate = (createdAt) => new Date(createdAt).toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, '$1$3');

  return (
    <S.Container>
      <S.Heading>Posts</S.Heading>
      <S.Table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Time Posted</th>
            <th>Score</th>
            <th>Comments</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
          {
          posts.map(({
            title, author, numComments, score, createdAt, url,
          }) => (
            <Table
              title={trimString(title)}
              author={author}
              numComments={numComments}
              score={score}
              date={ConvertTheDate(createdAt)}
              url={url}
            />
          ))
        }
        </tbody>
      </S.Table>
    </S.Container>
  );
}

PostsTable.propTypes = {
  posts: arrayOf({}).isRequired,
};
