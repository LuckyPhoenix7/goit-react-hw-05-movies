import styled from 'styled-components';

export const ReviewsList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ReviewItem = styled.li`
  background-color: #f8f8f8;

  padding: 15px;
  margin-bottom: 10px;

  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Author = styled.p`
  color: #007bff;

  font-weight: bold;
`;

export const Content = styled.p`
  color: #333;

  white-space: pre-line;
`;

export const NoReviews = styled.div`
  text-align: center;
  padding: 20px;
`;
