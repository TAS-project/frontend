import './App.css';
import Homepage from './pages/Homepage';
import ChapterOfBook from './pages/ChapterOfBook';
import BookProfile from './pages/BookProfile';
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
      main: '#5E03AE',
    },
    secondary: {
      main: '#96a5ee',
    },
    background: {
      paper:'#ccd4ff'
    },

  }
})
const user = true;
function App() {
  return (
 
         
    <div>
      {/**/}
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />}></Route>
         
        <Route path="/login" element={user ? <Navigate to="/" /> : <Homepage />}></Route>
        <Route path="/register"  element= {user ? <Navigate to="/" /> : <Homepage />}>
          
        </Route>
        <Route path="/book/:bookname" element={<ChapterOfBook />}>
          
          </Route>
          
      </Routes>
    </Router>
    </div>  
     

   
  );
}

export default App;
