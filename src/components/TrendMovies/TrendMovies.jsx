import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';
import { getTrend } from 'components/api';
import {
  MoviesList,
  MovieItem,
  MovieLink,
  MovieImage,
  MovieTitle,
} from './TrendMovies.styled';
import toast from 'react-hot-toast';

export const TrendMovies = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const location = useLocation();

  useEffect(() => {
    async function onFetchTrend() {
      try {
        setLoading(true);
        setError(false);

        await getTrend().then(movies => setTrendMovies([...movies] || []));
      } catch (error) {
        setError(true);
        toast.error('Упс! Что-то пошло не так!');
      } finally {
        setLoading(false);
      }
    }

    onFetchTrend();
  }, []);

  return (
    <>
      {loading && <Loader />}
      {error && <ErrorMessage />}

      <MoviesList>
        {trendMovies.map(
          ({ id, original_title, poster_path, release_date }) => (
            <MovieItem key={id}>
              <MovieLink to={`/movies/${id}`} state={{ from: location }}>
                <MovieImage
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w500${poster_path}`
                      : `https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg`
                  }
                  alt={original_title}
                />
                <MovieTitle>
                  {original_title} ({release_date.slice(0, 4)})
                </MovieTitle>
              </MovieLink>
            </MovieItem>
          )
        )}
      </MoviesList>
    </>
  );
};
