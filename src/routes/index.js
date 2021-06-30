import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from '../components/pages/LoginPage';
import TestPage from '../components/pages/TestPage';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={LoginPage} />
    <Route path="/login" exact component="#" />
    <Route path="/register" exact component="#" />
    <Route path="/test" exact component={TestPage} />
  </Switch>
);

export default Routes;
