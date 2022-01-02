import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Signin from './Signin';

ReactDOM.render(
  <React.StrictMode>
   {/* <App /> */}
  <Signin />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
