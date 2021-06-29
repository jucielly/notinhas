import styled from 'styled-components';
import { darken } from 'polished';

const Input = styled.input`
  padding: 0.9rem;
  background-color: ${(props) => props.theme.colors.helper};
  border: none;
  border-radius: 10px;
  text-align: center;

  & + input {
    margin: 1rem;
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.placeholder};
  }
`;

export default Input;
