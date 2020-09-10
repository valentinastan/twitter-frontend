import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from '../../state-management/stores/store'
import { postLoginRequest } from '../../requests/userActions'
import UserTopBar from '../../components/userTopBar'
import { clearUserInfos } from '../../helpers/functionsOnText'

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
      type: 'LOGIN',
      user
    }))
  }

  return(
    <React.Fragment>
      <h4>LOGIN PAGE</h4>
      <h5></h5>
      <div className = 'login'>
        <form>
          <label for="email">Email:</label><br></br>
          <input type="text" id="email" name="email" onChange = {(event) => setState({...state, email: event.target.value})}></input><br></br>
          <label for="password">Password:</label><br></br>
          <input type="text" id="password" name="password" onChange = {(event) => setState({...state, password: event.target.value})}></input><br></br>
        </form>
        <button id='login' type='button' onClick = {() => {
          newLogin()
          return clearUserInfos()
        }}>Log In</button>
      </div>
      
      <Link to={`/signup`}>Create New Account</Link>

      <UserTopBar/> 
    </React.Fragment>
  )
}

export default Login