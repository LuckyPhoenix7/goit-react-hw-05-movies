import React from 'react';
import { ErrorText, ErrorLink } from './ErrorMessage.styled';

export const ErrorMessage = () => {
  return (
    <ErrorText>
      Упс! Что-то пошло не так! Пожалуйста, перезагрузите страницу или перейдите{' '}
      <ErrorLink to="/">На главную страницу</ErrorLink>
    </ErrorText>
  );
};
