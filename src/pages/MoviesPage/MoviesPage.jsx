import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getSearch } from 'components/api';
import SearchForm from 'components/SearchForm/SearchForm';
import MoviesList from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';
import { MainContainer, NoResults } from './MoviesPage.styled';
import toast from 'react-hot-toast';

export default function MoviesPage() {
  const [searchParams] = useSearchParams();
  const [searchFilms, setSearchFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const searchMovies = query => {
    navigate(`/movies?query=${query}`);
  };

  useEffect(() => {
    const query = searchParams.get('query');
    if (query) {
      setLoading(true);
      setError(false);

      getSearch(query)
        .then(results => {
          setSearchFilms(results);
        })
        .catch(error => {
          setError(true);
          toast.error('Упс! Что-то пошло не так!');
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [searchParams]);

  return (
    <MainContainer>
      <SearchForm searchMovies={searchMovies} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {searchFilms.length > 0 ? (
        <MoviesList movies={searchFilms} />
      ) : (
        <NoResults>Введите название фильма для поиска!</NoResults>
      )}
    </MainContainer>
  );
}
