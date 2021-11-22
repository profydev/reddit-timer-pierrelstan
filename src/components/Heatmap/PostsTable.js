import React from 'react';
import {
  instanceOf,
} from 'prop-types';
import TableColumn from './TableColumn';
import * as S from './PostsTable.style';

function sortPosts(posts) {
  return [...posts].sort((a, b) => a.createdAt.getMinutes() - b.createdAt.getMinutes());
}

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
          sortPosts(posts).map(({
            title, author, numComments, score, createdAt, url,
          }) => (
            <TableColumn
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
  posts: instanceOf(Array).isRequired,
};
