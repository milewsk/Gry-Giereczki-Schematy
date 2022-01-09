//import logo from './logo.svg';
import './App.css';
//import React from "react";
import {Home} from './Home'
import {User} from './User'
import {BrowserRouter, Route,Routes ,  NavLink } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App container">
     <h3>React JS Front</h3>

     <nav> 
      <ul >
      <li >
        <NavLink  to= "/home">
          Home
        </NavLink>
      </li>
      <li className="navbar-ui">
        <NavLink  to= "/user">
          User
        </NavLink>
      </li>
      </ul> 
    </nav>
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/user' element={<User/>}/>
      </Routes>
    
    
    </div>
    </BrowserRouter>
  );
}

export default App;
