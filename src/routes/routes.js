import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Signup from '../pages/loginPage/signup';
import Login from '../pages/loginPage/login';

export const authRoutes = (
  <Switch>
    {console.log('palpalpalaplapaala')}
    <Route exact={true} path="/signup" component={Signup} />
    <Route path="/" component={Login} />
  </Switch>
);