import React from 'react';
import * as S from './InfoSection.style';

export default function InfoSection() {
  const DATA = ['We find the 500 top posts from the past year for a subreddit.',
    'The data is visualized in a heatmap grouped by weekday and hour of the day.',
    'See immediately when to submit your reddit post.'];
  return (
    <S.Container>
      <div>
        <div id="how-it-works">
          <h1>How it works</h1>
          <ul>
            {
            DATA.map((list) => (
              <li key={list}>{list}</li>
            ))
          }
          </ul>
        </div>
        <div id="about">
          <h1>About</h1>
          <p>
            This app was created during a course on
            <S.LinkProfy as="a" href="https://profy.dev"> profy.dev </S.LinkProfy>
            with the goal to implement a
            {' '}
            <br />
            pixel-perfect real-world application with professional workflows and tools like Kanban,
            ClickUp, Figma, GitHub, pull requests and code reviews.
            <S.LinkProfy as="a" href="https://profy.dev/employers">
              {' '}
              Click here for more
              information
            </S.LinkProfy>
            .
          </p>
        </div>
      </div>
    </S.Container>
  );
}
