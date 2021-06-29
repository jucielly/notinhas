import React from 'react';
import Input from '../../atoms/Input';
import { Wrapper } from './style';

const TextField = ({ icon: Icon, color, error, ...props }) => (
  <Wrapper>
    {Icon && <Icon className="icon" />}
    <Input color={color} className="input" {...props} />
    {error && <small className="error">{error}</small>}
  </Wrapper>
);

export default TextField;
