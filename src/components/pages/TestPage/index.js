import React from 'react';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import BaseCard from '../../atoms/BaseCard';
import NoteLogo from '../../atoms/NoteLogo';

const TestPage = () => (
  <>
    <Button>Login</Button>
    <Input placeholder="name@emxample.com" />
    <BaseCard />
    <NoteLogo />
  </>
);

export default TestPage;
