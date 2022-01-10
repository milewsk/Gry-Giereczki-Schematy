//import logo from './logo.svg';
import "./App.css";
//import React from "react";
import { Home } from "./Home";
import { User } from "./User";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import React from "react";
import MainContent from "./components/Layout/MainContent";
import Footer from "./components/Layout/Footer";

function App() {
  // 1. zwraca jeden elemnet
  return (
    <BrowserRouter>
      <React.Fragment>
        <Navbar imie="korad"></Navbar>
        <MainContent>
          <Routes>
            <Route path="/home" element={<Home />} />
          </Routes>
        </MainContent>
        <Footer></Footer>
        <nav>
          <ul>
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/user">User</NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/user" element={<User />} />
        </Routes>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
