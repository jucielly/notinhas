import styled from 'styled-components';
import { darken } from 'polished';

const Button = styled.button`
  background-color: ${(props) => props.theme.colors[props.color]};
  color: ${(props) => props.theme.colors.defaultWhite};
  border: none;
  padding: 0.7rem;
  width: 200px;
  margin: 1rem;
  border-radius: 15px;
  font-size: ${(props) => props.theme.fonts.fontSizes.M};
  box-shadow: 0px 4px 9px 0px rgba(0, 0, 0, 0.25);
  transition: 0.4s;

  &:hover {
    background-color: ${(props) =>
      darken(0.1, props.theme.colors[props.color])};
  }
`;

Button.defaultProps = {
  color: 'secondary',
};

export default Button;
