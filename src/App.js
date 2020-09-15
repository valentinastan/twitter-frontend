import React from 'react';
import './App.css';
import { authRoutes } from './routes/routes'
import UserTopBar from './components/userTopBar'

function App() {
//window.location.href
  //conect cu store. daca ex token, => twitter page. daca nu, la pg de login
  return (
    <React.Fragment>
      {/* <MainPage/> */}
      { authRoutes }
      <UserTopBar/> 
    </React.Fragment>
  );
}

export default App;
