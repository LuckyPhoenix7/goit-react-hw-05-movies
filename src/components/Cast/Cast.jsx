import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'components/api';
import { Loader } from 'components/Loader/Loader';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';
import {
  CastList,
  CastItem,
  ActorImage,
  ActorName,
  Character,
} from './Cast.styled';
import toast from 'react-hot-toast';

export default function Cast() {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function onFetchActors() {
      try {
        setLoading(true);

        await getCast(movieId).then(actors => {
          setActors(actors);
        });
      } catch (error) {
        setError(true);
        toast.error('Упс! Что-то пошло не так!');
      } finally {
        setLoading(false);
      }
    }

    onFetchActors();
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {error && <ErrorMessage />}

      <CastList>
        {actors.map(({ id, profile_path, original_name, name, character }) => (
          <CastItem key={id}>
            <ActorImage
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : `https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg`
              }
              alt={original_name}
            />
            <ActorName>{name}</ActorName>
            <Character>Character: {character}</Character>
          </CastItem>
        ))}
      </CastList>
    </>
  );
}
