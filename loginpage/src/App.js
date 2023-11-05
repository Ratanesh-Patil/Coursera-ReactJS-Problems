import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import Dashboard from './Components/Dashboard';
import Home from './Components/Home';
import About from './Components/About';
import Back from './Components/Back';

function App() {
  return (
    <div className="App">
    <Routes>
        <Route exact path = "/" element = {<LoginPage/>}></Route>
        <Route path = "/list" element = {<Dashboard/>}>
          <Route path = "home" element = {<Home/>}></Route>
          <Route path = "about" element = {<About/>}></Route>
          <Route path = "back" element = {<Back/>}></Route>
        </Route>
    </Routes>
    </div>
  );
}

export default App;
