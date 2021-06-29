import styled from 'styled-components';

const BaseCard = styled.div`
  height: 200px;
  width: 200px;
  margin: 1rem;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 20px;
  background-color: ${(props) => props.theme.colors[props.color]};
`;

BaseCard.defaultProps = {
  color: 'deafaultWhite',
};

export default BaseCard;
