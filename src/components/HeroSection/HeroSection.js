import React from 'react';
import * as S from './HeroSection.style';

export default function HeroSection() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>No reactions to your reddit posts?</S.Title>
        <S.SubTitle>
          Great timing, great results! Find the best time to post on
          your subreddit.
        </S.SubTitle>
        <S.WrapperButton>
          <S.Button to="/search/javascript">
            Show me the best time
          </S.Button>
        </S.WrapperButton>
      </S.Wrapper>
    </S.Container>
  );
}
