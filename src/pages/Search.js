import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import * as S from '../components/SubredditForm/SubredditForm.style';
import SubredditForm from '../components/SubredditForm/SubredditForm';
import Container from '../common/container/index';

export default function Search() {
  const history = useHistory();

  const { subreddit } = useParams();

  const [values, setValues] = useState('');

  useEffect(() => {
    setValues(subreddit);
  }, [subreddit]);

  const OnChange = ({ target }) => {
    setValues(target.value);
  };

  const OnSubmit = () => {
    const url = `/search/${values}`;
    history.push(url);
  };
  return (
    <Container>
      <S.Wrapper>
        <S.Title>Find the best time for a subreddit</S.Title>
        <SubredditForm
          OnChange={OnChange}
          OnSubmit={OnSubmit}
          values={values}
        />
      </S.Wrapper>
    </Container>
  );
}
