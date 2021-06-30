import React from 'react';
import styled from 'styled-components';
import LogoCard from '../../molecules/LogoCard';

const LoginAndregister = ({ children }) => (
  <Container>
    <LogoCard />
    <Card>
      <h2>Notinhas</h2>
      {children}
    </Card>
  </Container>
);

export default LoginAndregister;

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  background-color: ${(props) => props.theme.colors.primary};
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 45%;
  background-color: ${(props) => props.theme.colors.defaultWhite};
  border-radius: 25px 0px 0px 25px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 20px;

  h2 {
    font-family: ${(props) => props.theme.fonts.satisfy};
    color: ${(props) => props.theme.colors.secondary};
    font-size: ${(props) => props.theme.fonts.fontSizes.XXL};
    font-weight: lighter;
    margin: 4rem;
  }
`;
