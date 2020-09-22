import React from 'react'
import Login from '../../components/login'
import Signup from '../../components/signup'
import { useDispatch, useState } from '../state-management/stores/store'

const LoginPage = () => {

  return(
    <React.Fragment>
      <Login/>
      <Signup/> 
    </React.Fragment>
  )
}

export default LoginPage