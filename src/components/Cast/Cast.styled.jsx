import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;

  padding: 0;
  list-style: none;
`;

export const CastItem = styled.li`
  width: 200px;

  text-align: center;
  padding: 10px;

  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const ActorImage = styled.img`
  width: 100%;
  height: auto;

  border-radius: 10px;
`;

export const ActorName = styled.p`
  font-weight: bold;

  margin-top: 5px;
`;

export const Character = styled.p`
  color: #666;

  margin-top: 5px;
`;
