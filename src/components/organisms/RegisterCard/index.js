import React from 'react';
import { Link } from 'react-router-dom';
import LoginAndregister from '../../templates/LoginAndRegister';
import RegisterForm from '../RegisterForm';

const RegisterCard = () => (
  <LoginAndregister>
    <RegisterForm />
    <span>
      Já tem uma conta? <Link to="/login">Login</Link>
    </span>
  </LoginAndregister>
);

export default RegisterCard;
