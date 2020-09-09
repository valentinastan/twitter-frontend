import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return(
    <React.Fragment>
      <h4>LOGIN PAGE</h4>
      <h5></h5>
      <div className = 'login'>
        <form>
          <label for="email">Email:</label><br></br>
          <input type="text" id="email" name="email" value="yourEmail@gmail.com" onFocus = {(event) => event.target.value=''}></input><br></br>
          <label for="password">Password:</label><br></br>
          <input type="text" id="password" name="password"></input><br></br>
        </form>
        <button id='login' type='button'>Log In</button>
      </div>
      
      <Link to={`/signup`}>Create New Account</Link>
    </React.Fragment>
  )
}

export default Login