import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const DetailsContainer = styled.div`
  background-color: #fff;

  width: 80vw;

  padding: 20px;
  margin: 40px auto;

  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const BackButton = styled.button`
  background-color: #007bff;
  color: white;

  padding: 10px 15px;

  border: none;
  border-radius: 5px;

  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export const MovieImage = styled.img`
  width: 300px;
  height: auto;

  border-radius: 10px;
`;

export const MovieInfo = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;

  margin-top: 20px;
`;

export const MovieTextContainer = styled.div`
  flex-grow: 1;
`;

export const Title = styled.h1`
  color: #333;
`;

export const Subtitle = styled.h2`
  color: #666;
`;

export const Text = styled.p`
  color: #333;
`;

export const GenresList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const GenreItem = styled.li`
  display: inline;

  margin-right: 10px;
`;

export const AddSection = styled.section`
  background-color: #f8f8f8;

  text-align: center;

  padding: 20px;
  margin-top: 30px;

  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const AddTitle = styled.h3`
  color: #333;

  margin-bottom: 15px;
`;

export const AddList = styled.ul`
  display: flex;
  display: inline-flex;
  gap: 10px;

  padding: 0;
  list-style: none;
`;

export const AddItem = styled.li``;

export const AddLink = styled(NavLink)`
  background-color: #e0e0e0;
  color: #333;

  display: inline-block;

  padding: 10px 15px;
  text-decoration: none;

  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ccc;
  }

  &.active {
    color: white;
    background-color: #787878;
  }
`;
