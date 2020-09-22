import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Signup from '../components/signup';
import Login from '../components/login';
import MainPage from '../pages/mainPage';
import { useState } from '../state-management/stores/store'

function PrivateRoute ({component: Component, ...rest}) {
  const store = useState()

  let storeToken = store.user.authToken
  const isAuthenticated =  (() => storeToken ? true : false)

  console.log('store din routes', store.user.authToken)
  let authed = isAuthenticated()
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login'}} />}
    />
  )
}

export const authRoutes = (
  
  <Switch>
    <PrivateRoute exact={true} path='/' component={MainPage} /> 
    <Route exact={true} path="/login" component={Login} /> 
    <Route exact={true} path="/signup" component={Signup} /> 
  </Switch>
);