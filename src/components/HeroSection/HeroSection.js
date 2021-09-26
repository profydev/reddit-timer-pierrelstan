import React from 'react';
import defaultSubreddit from '../../utils/defaultSubreddit';
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
          <S.Button to={`/search/${defaultSubreddit}`}>
            Show me the best time
          </S.Button>
        </S.WrapperButton>
        <S.WrapperSubreddit>
          <S.TextSubreddit>r/javascript</S.TextSubreddit>
        </S.WrapperSubreddit>
        <S.WrapperTable>
          <S.TableImageLink to={`/search/${defaultSubreddit}`}>
            <S.Image
              src="/images/heatmap@2x.png"
              srcSet="/images/heatmap.png, /images/heatmap@2x.png 2x, /images/heatmap@3x.png 3x"
              alt="Screenshot of heatmap"
            />
          </S.TableImageLink>
        </S.WrapperTable>
      </S.Wrapper>
    </S.Container>
  );
}
