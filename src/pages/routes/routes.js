import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Signup from '../loginPage/signup';
import Login from '../loginPage/login';

export const authRoutes = (
  <Switch>
    <Route exact={true} path="/signup" component={Signup} />
    <Route path="/" component={Login} />
  </Switch>
);