import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import * as S from '../components/SubredditForm/SubredditForm.style';
import SubredditForm from '../components/SubredditForm/SubredditForm';
import Container from '../common/container/index';
import useFetchPosts from '../Hooks/useFetchPosts';
import Heatmap from '../components/Heatmap/Heatmap/Heatmap';

export default function Search() {
  const history = useHistory();

  const { subreddit } = useParams();

  const [values, setValues] = useState('');

  const {
    loading, error, data = [],
  } = useFetchPosts(
    `https://www.reddit.com/r/${subreddit}/top.json?t=year&limit=100`,
  );

  useEffect(() => {
    setValues(subreddit);
  }, [subreddit]);

  const OnChange = ({ target }) => {
    setValues(target.value);
  };

  const OnSubmit = async () => {
    const SubredditUrl = `/search/${values}`;
    history.push(SubredditUrl);
  };
  return (
    <Container as="section">
      <S.Wrapper>
        <S.Title>Find the best time for a subreddit</S.Title>
        <SubredditForm
          OnChange={OnChange}
          OnSubmit={OnSubmit}
          values={values}
        />
      </S.Wrapper>
      <Heatmap data={data} loading={loading} error={error} />
    </Container>
  );
}
