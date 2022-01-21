import './App.css';
import Homepage from './pages/Homepage';
import ChapterOfBook from './pages/ChapterOfBook';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import BookProfile from './pages/BookProfile';
import UserProfile from './pages/UserProfile';
import SearchResult from './pages/SearchResult';
import GenrePage from './pages/GenrePage';

import {
  BrowserRouter as Router,
  Navigate,
  Routes,
  Route,
} from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material';


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
        <Route exact path="/" element={<Homepage />}></Route>
         
        <Route path="/login" element={user ? <Navigate to="/" /> : <SignIn />}></Route>
        <Route path="/register" element={user ? <Navigate to="/" /> : <SignUp />}></Route>
        <Route path="/profile/:username"  element= {<UserProfile />}>  </Route>
        <Route path="/home"  element= {<Homepage />}>  </Route>
          <Route exact path="/book/:bookname" element={<BookProfile />}></Route>
          <Route  path="/search/:word" element={<SearchResult />} />
          <Route path="/book/:bookname/:CId" element={<ChapterOfBook />}></Route>
          <Route path="/genre/:title" element={<GenrePage />}></Route>  
      </Routes>
    </Router>
    </ThemeProvider> 
     
  );
};

export default App;