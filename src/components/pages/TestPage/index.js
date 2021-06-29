import React from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import TextField from '../../molecules/TextField';

const TestPage = () => (
  <>
    <TextField
      placeholder="example@hhshsh.com"
      icon={HiOutlineMail}
      color="helper"
    />
  </>
);

export default TestPage;
