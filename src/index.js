import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {StateProvider} from './state-management/stores/store'
import { HashRouter } from 'react-router-dom'

ReactDOM.render(
  <HashRouter>
    <React.StrictMode>
      <StateProvider> 
        <App />
      </StateProvider>
    </React.StrictMode>
  </HashRouter>,
  document.getElementById('root'));

serviceWorker.unregister();