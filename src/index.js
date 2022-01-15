import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import UserProfile from './pages/UserProfile';
// import App from './App';
import Signin from './Signin';
import SignUp from './pages/SignUp';
// import App from './App';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <SignUp />
    {/* <UserProfile /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

