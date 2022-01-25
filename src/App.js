import './App.css';
import React from 'react';
import Homepage from './pages/Homepage';
import ChapterOfBook from './pages/ChapterOfBook';
import Signin from './pages/Signin';
import SignUp from './pages/SignUp';
import BookProfile from './pages/BookProfile';
import UserProfile from './pages/UserProfile';
import SearchResult from './pages/SearchResult';
import EditUserInfo from './pages/EditUserInfo';
import NewBook from './pages/NewBook';
import GenrePage from './pages/GenrePage';

import {
  BrowserRouter as Router,
  Navigate,
  Routes,
  Route,
} from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material';
import EditBookInfo from './pages/EditBookInfo';
import SupportSignup from './pages/SupportSignup';
import SupportSignin from './pages/SupportSignin';



const theme = createTheme({
  palette: {
    primary: {
      main: '#ED6663 ',
    },
     secondary: {
      main: '#EBD8B7',
    },
  },
});

const user = false;
function App() {
  return (
 
         
    <ThemeProvider theme={theme}>
      {/**/}
    <Router>
      <Routes>
        <Route exact path="/" element={<UserProfile />}></Route>
         
        <Route path="/login" element={user ? <Navigate to="/" /> : <Signin />}></Route>
        <Route path="/register" element={user ? <Navigate to="/" /> : <SignUp />}></Route>
        <Route path="/profile/:username"  element= {<UserProfile />}>  </Route>
         <Route path="/home"  element= {<Homepage />}>  </Route> 
         <Route exact path="/editUser/:username" element={<EditUserInfo />}></Route>
          <Route exact path="/NewBook" element={<NewBook />}></Route>
          <Route exact path="/EditBookInformation/:bookid" element={<EditBookInfo />}></Route>
          <Route exact path="/book/:bookid" element={<BookProfile />}></Route>
          <Route  path="/search/:word" element={<SearchResult />} />
          <Route path="/book/:bookid/:CId" element={<ChapterOfBook />}></Route>
          <Route path="/genre/:genreid" element={<GenrePage />}></Route>
          
          {/* Support Members*/}
          <Route path="/SupportSignup"  element= {<SupportSignup />}>  </Route>
          <Route path="/SupportSignin" element={<SupportSignin />}>  </Route>
          
      </Routes>
    </Router>
    </ThemeProvider> 
     
  );
};

export default App;