import React from 'react';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import BaseCard from '../../atoms/BaseCard';

const TestPage = () => (
  <>
    <Button>Login</Button>
    <Input placeholder="name@emxample.com" />
    <BaseCard />
  </>
);

export default TestPage;
