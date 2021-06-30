import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 70%;
  padding-bottom: 15px;
  .input {
    color: ${(props) => props.theme.colors.fontColor};
    width: 100%;
    text-align: center;
  }
  .icon {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 70px;
    margin: 5px;
    height: 30px;
  }
  .error {
    margin-left: 20px;
    color: ${(props) => props.theme.colors.danger};
  }
`;
