import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'components/api';
import { Loader } from 'components/Loader/Loader';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';
import {
  ReviewsList,
  ReviewItem,
  Author,
  Content,
  NoReviews,
} from './Reviews.styled';
import toast from 'react-hot-toast';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function onFetchReviews() {
      try {
        setLoading(true);

        await getReviews(movieId).then(reviews => {
          setReviews(reviews);
        });
      } catch (error) {
        setError(true);
        toast.error('Упс! Что-то пошло не так!');
      } finally {
        setLoading(false);
      }
    }

    onFetchReviews();
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {error && <ErrorMessage />}

      {reviews.length !== 0 ? (
        <ReviewsList>
          {reviews.map(review => (
            <ReviewItem key={review.id}>
              <Author>Author: {review.author}</Author>
              <Content>{review.content}</Content>
            </ReviewItem>
          ))}
        </ReviewsList>
      ) : (
        <NoReviews>Мы не нашли ни одной рецензии на этот фильм!</NoReviews>
      )}
    </>
  );
}
