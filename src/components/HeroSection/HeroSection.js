import React from 'react';
import * as S from './HeroSection.style';

export default function HeroSection() {
  return (
    <S.Container>
      <div>
        <h1>No reaction to your reddit post?</h1>
        <p>Great timing, great results. Find the best time to post on your subreddit.</p>
        <button type="submit">
          show me the best time
        </button>
        <p>r/javascript</p>
      </div>
      <div>
        <S.TableImage />
      </div>
    </S.Container>
  );
}
