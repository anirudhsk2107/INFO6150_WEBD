
import './App.css';
import {BrowserRouter as Router,Routes,Route,Link,Switch} from 'react-router-dom'
import Home from './pages/Home/Home';
import Aboutus from './pages/Aboutus/Aboutus1';
import Jobs from './pages/Jobs/Jobs';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login';
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import Error from './pages/Error/Error';


function App() {
  return (
    <Router>

    <Routes>
    <Route path = "/Home" element = {<Home/>}></Route>
    <Route path = "/Aboutus" element = {<Aboutus/>}></Route>
    <Route path = "/Jobs" element = {<Jobs/>}></Route>
    <Route path = "/Contact" element = {<Contact/>}></Route>
    <Route path = "/" element = {<Login/>}></Route>
    <Route path = "/Error" element = {<Error/>}></Route>
    </Routes>
   
   
  </Router>
  );
}

export default App;
