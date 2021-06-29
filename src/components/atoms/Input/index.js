import styled from 'styled-components';
import { darken } from 'polished';

const Input = styled.input`
  padding: 1rem;
  background-color: ${(props) => props.theme.colors[props.color]};
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

Input.defaultProps = {
  color: 'helper',
};

export default Input;
