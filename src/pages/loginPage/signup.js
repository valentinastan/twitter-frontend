import React from 'react'

const Signup = () => {
  return(
    <React.Fragment>
      <div className = 'signup'>
        <form>
          <label for="username">Username:</label><br></br>
          <input type="text" id="username" name="username" value="yourUsername" onFocus = {(event) => event.target.value=''}></input><br></br>
          <label for="email">Email:</label><br></br>
          <input type="text" id="email" name="email" value="yourEmail@gmail.com" onFocus = {(event) => event.target.value=''}></input><br></br>
          <label for="password">Password:</label><br></br>
          <input type="text" id="password" name="password"></input><br></br>
        </form>
        <button id='signup' type='button'>Sign Up</button>
      </div>
    </React.Fragment>
  )
}

export default Signup