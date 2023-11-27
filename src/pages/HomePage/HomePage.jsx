import { TrendMovies } from 'components/TrendMovies/TrendMovies';
import { HomePageContainer, Title } from './HomePage.styled';

export default function HomePage() {
  return (
    <HomePageContainer>
      <Title>Trending today</Title>
      <TrendMovies />
    </HomePageContainer>
  );
}
