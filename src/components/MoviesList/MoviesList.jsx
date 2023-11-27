import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  MoviesContainer,
  MovieItem,
  MovieLink,
  MovieImage,
  MovieTitle,
} from './MoviesList.styled';

export default function MoviesList({ movies }) {
  const location = useLocation();

  return (
    <MoviesContainer>
      {movies.map(({ id, poster_path, original_title, release_date }) => (
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
      ))}
    </MoviesContainer>
  );
}
