import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;

  margin-bottom: 20px;
`;

export const FormInput = styled.input`
  width: 300px;

  padding: 10px;
  margin-right: 10px;

  border-radius: 5px;
  border: 1px solid #ddd;

  &:focus {
    border-color: #007bff;

    outline: none;
  }
`;

export const SubmitBtn = styled.button`
  background-color: #007bff;
  color: white;

  padding: 10px 15px;
  cursor: pointer;

  border: none;
  border-radius: 5px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;
