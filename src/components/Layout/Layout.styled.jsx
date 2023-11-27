import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  background-color: #007bff;
  color: white;

  padding: 10px 20px;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
`;

export const Link = styled(NavLink)`
  color: white;

  font-size: 20px;
  text-decoration: none;

  margin: 0 15px;
  padding: 5px 10px;

  border-radius: 4px;
  transition: background-color 300ms ease;

  &:hover,
  &.active {
    background-color: #0056b3;
  }
`;
