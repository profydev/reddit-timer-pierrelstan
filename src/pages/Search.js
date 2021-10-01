import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import SubredditForm from '../components/SubredditForm/SubredditForm';
import Container from '../common/container/index';

export default function Search() {
  const history = useHistory();

  const { subreddit } = useParams();

  const [search, setSearch] = useState('');

  useEffect(() => {
    setSearch(subreddit);
  }, [subreddit]);

  const handleChangeState = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmitState = (e) => {
    e.preventDefault();
    const url = `/search/${search}`;
    history.push(url);
  };
  return (
    <Container>
      <SubredditForm
        handleChangeState={handleChangeState}
        handleSubmitState={handleSubmitState}
        search={search}
      />
    </Container>
  );
}
