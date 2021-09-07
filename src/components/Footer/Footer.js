import React from 'react';
import * as S from './Footer.style';

export default function Footer() {
  const RIGHT = 'true';
  return (
    <S.Container>
      <S.ListItem
        as="a"
        href="https://profy.dev/employers"
      >
        profy.dev
      </S.ListItem>
      <S.LogoLink to="/">
        <S.Logo />
      </S.LogoLink>
      <S.ListItem to="/terms" totheright={RIGHT}>
        Terms &amp; Privacy
      </S.ListItem>
    </S.Container>
  );
}
