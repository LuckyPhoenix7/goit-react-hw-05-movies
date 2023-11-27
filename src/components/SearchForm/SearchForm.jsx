import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoSearchOutline } from 'react-icons/io5';
import { Form, FormInput, SubmitBtn } from './SearchForm.styled';
import toast from 'react-hot-toast';

export default function SearchForm({ searchMovies }) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const onInputChange = evt => {
    setQuery(evt.target.value);
  };

  const onFormSubmit = evt => {
    evt.preventDefault();

    if (query.trim() === '') {
      toast.error('Введите название фильма для поиска!');
    } else {
      navigate(`/movies?query=${query.toLowerCase()}`);
    }
  };

  return (
    <Form onSubmit={onFormSubmit}>
      <FormInput
        type="text"
        name="query"
        autoFocus
        value={query}
        onChange={onInputChange}
      />
      <SubmitBtn type="submit">
        <IoSearchOutline size={20} />
      </SubmitBtn>
    </Form>
  );
}
