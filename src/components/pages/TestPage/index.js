import React from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import TextField from '../../molecules/TextField';
import LogoCard from '../../molecules/LogoCard';

const TestPage = () => (
  <>
    <TextField
      placeholder="example@hhshsh.com"
      icon={HiOutlineMail}
      color="helper"
    />
    <LogoCard />
  </>
);

export default TestPage;
