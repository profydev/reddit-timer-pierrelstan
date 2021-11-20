import React from 'react';
import {
  arrayOf,
} from 'prop-types';
import * as S from './PostsTable.style';
import Table from './Table';

function getDisplayTime(createdAt) {
  return new Date(createdAt)
    .toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    .toLowerCase();
}
export default function PostsTable({ posts }) {
  return (
    <S.Container>
      <S.Headling>Posts</S.Headling>
      <S.Table>
        <thead>
          <S.Row>
            <S.HeaderColumn>Title</S.HeaderColumn>
            <S.HeaderColumn>Time Posted</S.HeaderColumn>
            <S.HeaderColumn>Score</S.HeaderColumn>
            <S.HeaderColumn>Comments</S.HeaderColumn>
            <S.HeaderColumn>Author</S.HeaderColumn>
          </S.Row>
        </thead>
        <tbody>
          {
          posts.map(({
            title, author, numComments, score, createdAt, url,
          }) => (
            <Table
              title={title}
              author={author}
              numComments={numComments}
              score={score}
              date={getDisplayTime(createdAt)}
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
