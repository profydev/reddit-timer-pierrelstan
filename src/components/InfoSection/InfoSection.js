import React from 'react';
import * as S from './InfoSection.style';

export default function InfoSection() {
  const DATA = ['• We find the 500 top posts from the past year for a subreddit.',
    '• The data is visualized in a heatmap grouped by weekday and hour of the day.',
    '• See immediately when to submit your reddit post.'];
  return (
    <S.Container>
      <S.Wrapper>
        <S.WrapperHowItWorks id="how-it-works">
          <S.Title>How it works</S.Title>
          <S.List>
            {
            DATA.map((list) => (
              <S.ListItem key={list}>{list}</S.ListItem>
            ))
          }
          </S.List>
        </S.WrapperHowItWorks>
        <S.WrapperAbout id="about">
          <S.Title>About</S.Title>
          <S.Text>
            This app was created during a course on
            <S.LinkProfy as="a" href="https://profy.dev"> profy.dev </S.LinkProfy>
            with the goal to implement a
            {' '}
            <br />
            pixel-perfect real-world application with professional workflows and tools like Kanban,
            <br />
            ClickUp, Figma, GitHub, pull requests and code reviews.
            <S.LinkProfy as="a" href="https://profy.dev/employers">
              {' '}
              Click here for more
              information
            </S.LinkProfy>
            .
          </S.Text>
        </S.WrapperAbout>
      </S.Wrapper>
    </S.Container>
  );
}
