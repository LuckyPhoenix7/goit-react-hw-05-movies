import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MoviesContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;

  padding: 0;

  list-style: none;
`;

export const MovieItem = styled.li`
  width: 200px;

  text-align: center;
  overflow: hidden;

  border: 2px solid #007bff;
  border-radius: 15px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3);
  }
`;

export const MovieLink = styled(Link)`
  color: #333;

  text-decoration: none;

  &:hover {
    color: #007bff;
  }
`;

export const MovieImage = styled.img`
  width: 100%;
  height: auto;

  border-radius: 10px;
`;

export const MovieTitle = styled.p`
  margin-top: 10px;
`;
