import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ErrorText = styled.p`
  color: #ff0000;

  text-align: center;
  margin: 20px 0;
`;

export const ErrorLink = styled(Link)`
  color: #007bff;

  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;
