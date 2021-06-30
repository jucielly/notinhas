import React from 'react';
import { Link } from 'react-router-dom';
import LoginAndregister from '../../templates/LoginAndRegister';
import LoginForm from '../LoginForm';

const LoginCard = () => (
  <LoginAndregister>
    <LoginForm />
    <span>
      Já tem uma conta? <Link to="/register">Cadastre-se</Link>
    </span>
  </LoginAndregister>
);

export default LoginCard;
