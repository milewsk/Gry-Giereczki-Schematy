//import logo from './logo.svg';
import "./App.css";
//import React from "react";
import { Home } from "./Home";
import { User } from "./User";
import { Route, Routes, NavLink } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import React, { useContext } from "react";
import MainContent from "./components/Layout/MainContent";
import Footer from "./components/Layout/Footer";
import AuthContext from "./store/AuthContext";
import Button from "./components/UI/Button/Button";
import GameContext from "./store/GameContext";
import Kostka from "./components/Games/Kostka/Kostka";

function App() {
  const GameCtx = useContext(GameContext);
  // 1. zwraca jeden elemnet
  return (
    <React.Fragment>
      <Navbar imie="korad"></Navbar>
      <MainContent></MainContent>
      <Footer></Footer>
      {/* <Button onClick={GameCtx.GameNumber(1)}>Gra Kamień papier</Button>
      <Button onClick={GameCtx.GameNumber(2)}>Gra Kostka</Button>
      <Button onClick={GameCtx.GameNumber(3)}>Gra 3</Button>
      {GameCtx.chosenGame == 1 && <div>Gra pierwsza wywołana</div>} */}
      <Kostka></Kostka>
    </React.Fragment>
  );
}

export default App;
