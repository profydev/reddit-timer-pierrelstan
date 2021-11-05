import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import * as S from '../../components/SubredditForm/SubredditForm.style';
import SubredditForm from '../../components/SubredditForm/SubredditForm';
import Container from '../../common/container/index';
import useFetchPosts from '../../Hooks/useFetchPosts';
import Heatmap from '../../components/Heatmap/Heatmap';

export default function Search() {
  const history = useHistory();

  const { subreddit } = useParams();

  const [values, setValues] = useState('');
  const {
    isLoading, hasError, Posts = [],
  } = useFetchPosts(subreddit);
  useEffect(() => {
    setValues(subreddit);
    // return () => {
    //   setValues('');
    // };
  }, [subreddit]);

  const OnChange = ({ target }) => {
    const removeSpaceInValue = target.value.replace(/\s/g, '');
    setValues(removeSpaceInValue);
  };

  const OnSubmit = async () => {
    const SubredditUrl = await `/search/${values}`;
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
      <Heatmap Posts={Posts} isLoading={isLoading} hasError={hasError} />
    </Container>
  );
}
