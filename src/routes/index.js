import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from '../components/pages/LoginPage';
import TestPage from '../components/pages/TestPage';
import LoginCard from '../components/organisms/LoginCard';
import RegisterCard from '../components/organisms/RegisterCard';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={LoginPage} />
    <Route path="/login" exact component={LoginCard} />
    <Route path="/register" exact component={RegisterCard} />
    <Route path="/test" exact component={TestPage} />
  </Switch>
);

export default Routes;
