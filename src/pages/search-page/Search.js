import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import useFetchPosts from '../../Hooks/useFetchPosts';
import HeatmapSection from '../../components/Heatmap/HeatmapSection';
import FormSection from '../../components/SubredditForm/FormSection';
import PostsTable from '../../components/Heatmap/PostsTable';

export default function Search() {
  const history = useHistory();

  const { subreddit } = useParams();

  const [values, setValues] = useState('');
  const {
    isLoading, hasError, postsPerDay = [],
  } = useFetchPosts(subreddit);

  const [selectedDayAndHour, setSelectedDayAndHour] = useState({ day: null, hour: null });
  const { day, hour } = selectedDayAndHour;
  const selectedPosts = (postsPerDay[day] && postsPerDay[day][hour]) || [];

  useEffect(() => {
    setValues(subreddit);
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
    <>
      <FormSection OnSubmit={OnSubmit} OnChange={OnChange} values={values} />
      <HeatmapSection
        postsPerDay={postsPerDay}
        isLoading={isLoading}
        hasError={hasError}
        selectedDayAndHour={selectedDayAndHour}
        setSelectedDayAndHour={setSelectedDayAndHour}
        onClickHour={setSelectedDayAndHour}
      />

      {
        day && hour && <PostsTable posts={selectedPosts} />
      }
    </>
  );
}
