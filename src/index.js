import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import UserProfile from './pages/UserProfile';


// import SignUp from './pages/SignUp';

import SignIn from './pages/SignIn';



ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <SignIn /> */}
    <UserProfile /> 
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

