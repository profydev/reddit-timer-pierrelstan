import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import SubredditForm from '../components/SubredditForm/SubredditForm';

export default function Search() {
  const history = useHistory();

  const id = useParams();

  const [search, setSearch] = useState('');

  useEffect(() => {
    setSearch(id.search);
  }, [id]);

  const handleChangeState = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmitState = (e) => {
    e.preventDefault();
    const url = `/search/${search}`;
    history.push(url);
  };
  return (
    <div>
      <SubredditForm
        handleChangeState={handleChangeState}
        handleSubmitState={handleSubmitState}
        search={search}
      />
    </div>
  );
}
