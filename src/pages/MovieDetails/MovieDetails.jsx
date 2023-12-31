import { useState, useEffect, useRef } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { getDetails } from 'components/api';
import { Loader } from 'components/Loader/Loader';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';
import {
  DetailsContainer,
  BackLink,
  MovieImage,
  MovieInfo,
  Title,
  Subtitle,
  Text,
  GenresList,
  GenreItem,
  AddLink,
  MovieTextContainer,
  AddSection,
  AddTitle,
  AddList,
  AddItem,
} from './MovieDetails.styled';
import { RiArrowGoBackLine } from 'react-icons/ri';
import toast from 'react-hot-toast';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movieInfo, setMovieDetail] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');

  useEffect(() => {
    async function onFetchMovie() {
      try {
        setLoading(true);
        setError(false);

        await getDetails(movieId).then(movieDetails =>
          setMovieDetail(movieDetails)
        );
      } catch (error) {
        setError(true);
        toast.error('Упс! Что-то пошло не так!');
      } finally {
        setLoading(false);
      }
    }

    onFetchMovie();
  }, [movieId]);

  if (Object.keys(movieInfo).length === 0) {
    return;
  }

  const {
    title,
    release_date,
    popularity,
    overview,
    genres,
    poster_path,
    original_title,
  } = movieInfo;

  return (
    <DetailsContainer>
      <BackLink to={backLink.current}>
        <RiArrowGoBackLine size={20} />
      </BackLink>

      {loading && <Loader />}
      {error && <ErrorMessage />}

      <MovieInfo>
        <MovieImage
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : `https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg`
          }
          alt={original_title}
        />
        <MovieTextContainer>
          <Title>
            {title} ({release_date.slice(0, 4)})
          </Title>
          <Text>User score: {popularity}</Text>
          <Subtitle>Overview</Subtitle>
          <Text>{overview}</Text>
          <Subtitle>Genres</Subtitle>
          <GenresList>
            {genres &&
              genres.map(genre => (
                <GenreItem key={genre.id}>{genre.name}</GenreItem>
              ))}
          </GenresList>
        </MovieTextContainer>
      </MovieInfo>
      <AddSection>
        <AddTitle>Additional information</AddTitle>
        <AddList>
          <AddItem>
            <AddLink to="cast">Cast</AddLink>
          </AddItem>
          <AddItem>
            <AddLink to="reviews">Reviews</AddLink>
          </AddItem>
        </AddList>
      </AddSection>
      <Outlet />
    </DetailsContainer>
  );
}
