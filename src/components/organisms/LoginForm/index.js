import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { HiOutlineMail } from 'react-icons/hi';
import { MdLockOpen } from 'react-icons/md';
import { Form } from './style';
import TextField from '../../molecules/TextField';
import Button from '../../atoms/Button';

const schema = yup.object().shape({
  email: yup.string().email('Email inválido').required('Insira seu email'),
  password: yup
    .string()
    .required('Digite sua senha')
    .test(
      'min',
      'Sua senha deve ter mais de 8 caracteres',
      (value) => !value || (value && value.length > 7)
    ),
});

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <Form>
      <TextField
        type="email"
        color="helper"
        name="email"
        placeholder="example@email.com"
        icon={HiOutlineMail}
        error={errors.email?.message}
        {...register('email', { required: true })}
      />
      <TextField
        type="password"
        color="helper"
        name="password"
        placeholder="senha"
        icon={MdLockOpen}
        error={errors.password?.message}
        {...register('password,', { required: true })}
      />
      <Button type="submit">Login</Button>
    </Form>
  );
};

export default LoginForm;
