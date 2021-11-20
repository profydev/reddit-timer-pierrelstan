import React from 'react';
import {
  string,
} from 'prop-types';
import * as S from './PostsTable.style';

export default function TableHeaderRow({ title, url }) {
  return (
    <S.TitleColumn>
      <S.Link
        href={`${url}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
      </S.Link>
    </S.TitleColumn>
  );
}

TableHeaderRow.propTypes = {
  title: string.isRequired,
  url: string.isRequired,
};
