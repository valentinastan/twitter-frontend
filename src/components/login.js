import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from '../state-management/stores/store'
import { postLoginRequest } from '../requests/userActions'
import { clearUserInfos } from '../helpers/functionsOnText'

const Login = () => {

  const [state, setState] = useState({
    email: '',
    password: ''
  });

  const dispatch = useDispatch()

  const newLogin = () => {
    postLoginRequest({
      email: state.email,
      password: state.password
    }).then((user) => dispatch({
      type: 'USER_AUTH',
      user
      })).then(() =>  window.location.href = 'http://localhost:3000/')
  }

  return(
    <React.Fragment>
      <h4>LOGIN PAGE</h4>
      <h5></h5>
      <div className = 'login'>
        <form>
          <label for="email">Email:</label><br></br>
          <input type="text" id="email" name="email" placeholder='Your email' onChange = {(event) => setState({...state, email: event.target.value})}></input><br></br>
          <label for="password">Password:</label><br></br>
          <input type="password" id="password" name="password" placeholder='Your password' onChange = {(event) => setState({...state, password: event.target.value})}></input><br></br>
        </form>
        <button id='login' type='button' onClick = {() => {
          newLogin()
          return clearUserInfos()
        }}>Log In</button>
      </div>
      
      <Link to={`/signup`}>Create New Account</Link>

    </React.Fragment>
  )
}

export default Login