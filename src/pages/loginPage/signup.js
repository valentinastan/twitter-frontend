import React, { useState } from 'react'
import { postSignUpRequest } from '../../requests/userActions'
import { useDispatch } from '../../state-management/stores/store'
import { clearUserSignUp } from '../../helpers/functionsOnText'

const Signup = () => {

  const [state, setState] = useState({
    username: '',
    email: '',
    password: ''
  })

  const dispatch = useDispatch()

  const newUser = () => {
    postSignUpRequest({
      username: state.username,
      email: state.email,
      password: state.password
    }).then((user) => dispatch({
        type: 'SIGN_UP',
        user
    }))
  }

  return(
    <React.Fragment>
      <div className = 'signup'>
        <h4>SIGN UP</h4>
        <form>
          <label for="username">Username:</label><br></br>
          <input type="text" id="username" name="username" placeholder="Your Username" onChange={(event) => setState({...state, username: event.target.value})}></input><br></br>
          <label for="email">Email:</label><br></br>
          <input type="text" id="email" name="email" placeholder="YourEmail@gmail.com" onChange={(event) => setState({...state, email: event.target.value})}></input><br></br>
          <label for="password">Password:</label><br></br>
          <input type="text" id="password" name="password" placeholder='Your Password' onChange={(event) => setState({...state, password: event.target.value})}></input><br></br>
        </form>
        <button id='signup' type='button' onClick={() => {
          newUser()
          return clearUserSignUp()
        }}>Sign Up</button>
      </div>
    </React.Fragment>
  )
}

export default Signup