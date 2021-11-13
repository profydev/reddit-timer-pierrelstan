import React from 'react';
import PropTypes from 'prop-types';
import SubredditForm from './SubredditForm';
import * as S from './SubredditForm.style';

export default function FormSection({ OnChange, OnSubmit, values }) {
  return (
    <S.Wrapper as="section">
      <S.Headline>Find the best time for a subreddit</S.Headline>
      <SubredditForm
        OnChange={OnChange}
        OnSubmit={OnSubmit}
        values={values}
      />
    </S.Wrapper>
  );
}
FormSection.defaultsProps = {
  OnSubmit: () => {},
  OnChange: () => {},
  values: '',
};

FormSection.propTypes = {
  values: PropTypes.string.isRequired,
  OnChange: PropTypes.func.isRequired,
  OnSubmit: PropTypes.func.isRequired,
};
