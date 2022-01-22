import './App.css';
import React from 'react';
// import Homepage from './pages/Homepage';
import ChapterOfBook from './pages/ChapterOfBook';
// import Signin from './pages/Signin';
// import SignUp from './pages/SignUp';
import BookProfile from './pages/BookProfile';
import UserProfile from './pages/UserProfile';
import SearchResult from './pages/SearchResult';
import EditUserInfo from './pages/EditUserInfo';
import NewBook from './pages/NewBook';

import {
  BrowserRouter as Router,

  Routes,
  Route,
} from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material';
import EditBookInfo from './pages/EditBookInfo';



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

// const user = false;
function App() {
  return (
 
         
    <ThemeProvider theme={theme}>
      {/**/}
    <Router>
      <Routes>
        <Route exact path="/" element={<UserProfile />}></Route>
         
        {/* <Route path="/login" element={user ? <Navigate to="/" /> : <Signin />}></Route>
        <Route path="/register" element={user ? <Navigate to="/" /> : <SignUp />}></Route>
        <Route path="/profile/:username"  element= {<UserProfile />}>  </Route>
        <Route path="/home"  element= {<Homepage />}>  </Route> */}
         <Route exact path="/editUser" element={<EditUserInfo />}></Route>
          <Route exact path="/NewBook" element={<NewBook />}></Route>
          <Route exact path="/EditBookInformation" element={<EditBookInfo />}></Route>

          <Route exact path="/book/:bookname" element={<BookProfile />}></Route>
          <Route exact path="/search/:word" element={<SearchResult />}></Route>
        <Route path="/book/:bookname/:CId" element={<ChapterOfBook />}></Route>  
      </Routes>
    </Router>
    </ThemeProvider> 
     
  );
};

export default App;