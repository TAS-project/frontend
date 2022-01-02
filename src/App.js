import './App.css';
import Toolbar from './components/Toolbar';
import Homefeed from './components/Homefeed';
import SuserFeed from './components/SuserFeed';
import BookProfile from './pages/BookProfile';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <div>
      <BookProfile/>
     
    </div>  
     
  );
}

export default App;
