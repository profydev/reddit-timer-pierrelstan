import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import * as S from './SubredditForm.style';
import Button from '../../common/button/index';

function SubredditForm({
  values,
  OnChange,
  OnSubmit,
}) {
  const { register, handleSubmit } = useForm();

  const handleChange = (e) => {
    OnChange(e);
  };

  return (
    <S.Form onSubmit={handleSubmit((data) => {
      OnSubmit(data);
    })}
    >
      <S.Label>
        r /
        {/* eslint-disable-next-line */}
          <S.Input {...register('values')} type="text" value={values} onChange={handleChange} />
      </S.Label>
      <Button type="submit">Search</Button>
    </S.Form>
  );
}

SubredditForm.propTypes = {
  values: PropTypes.string.isRequired,
  OnChange: PropTypes.func.isRequired,
  OnSubmit: PropTypes.func.isRequired,
};
export default SubredditForm;
