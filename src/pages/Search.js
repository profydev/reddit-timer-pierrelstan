import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import SubredditForm from '../components/SubredditForm/SubredditForm';

export default function Search() {
  const history = useHistory();

  const [search, setSearch] = useState('');

  useEffect(() => {
    const string = history.location.pathname.substr(8);
    if (history.location.pathname === '/search/javascript') {
      setSearch('javascript');
    }
    setSearch(string);
  }, [history.location.pathname]);

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
        onSearch={search}
      />
    </div>
  );
}
