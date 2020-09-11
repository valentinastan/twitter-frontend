import React from 'react';
import Twitter from './pages/mainPage/twitter'
import './App.css';
import Login from './pages/loginPage/login';
import { authRoutes } from './routes/routes'
import UserTopBar from './components/userTopBar'

function App() {
  return (
    <React.Fragment>
      <Twitter/>
      { authRoutes }
      {/* <Login/> */}
      <UserTopBar/> 
    </React.Fragment>
  );
}

export default App;
