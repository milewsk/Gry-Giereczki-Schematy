//import logo from './logo.svg';
import "./App.css";
//import React from "react";
// import { Home } from "./Home";
import { Route, Routes, NavLink, Navigate } from "react-router-dom";
import React, { useContext } from "react";
import AuthContext from "./store/AuthContext";

import Register from ".components/Login/Register";
import Login from "./components/Login/Login";
// import { Home } from "../../Home";
import Games from "./components/Games/Games";
import Profile from "./components/Profile/Profile";
import Ranking from ".components/Profile/Ranking/Ranking";
import Achievements from ".components/Profile/Achievements/Achievements";
import Details from ".components/Profile/Details/Details";
import EditProfile from ".components/Profile/EditProfile/EditProfile";
import Layout from "./components/Layout/Layout";
import Kostka from "./components/Games/Kostka/Kostka";
import KPN from "./components/Games/KPN/KPN";

function App() {
  const authCtx = useContext(AuthContext);

  // 1. zwraca jeden elemnet
  return (
    <React.Fragment>
      <Routes>
        {!authCtx.isLoggedIn && (
          <Route path="/" element={<Layout></Layout>}>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/register" element={<Register></Register>}></Route>
            {/* strona powitalna */}
            <Route index element={<Login></Login>}></Route>
          </Route>
        )}
        {authCtx.isLoggedIn && (
          //   <Routes>

          //tutaj tylko outlet

          // dodać do scieżki "/" element layout
          // w nim przechowywać footera navbara i main content (miejsce na outlet)
          // domyślną kartę, czy to wybór gry czy to jakąś nową stronę powitalną
          <Route path="/" element={<Layout></Layout>}>
            <Route path="games" element={<Games></Games>}></Route>
            <Route path="game1" element={<KPN></KPN>}></Route>
            <Route path="game2" element={<Kostka></Kostka>}></Route>
            <Route path="game3" element={<Login></Login>}></Route>
            <Route path="profile" element={<Profile></Profile>}>
              <Route
                path="edit-profile"
                element={<EditProfile></EditProfile>}
              ></Route>
              <Route path="details" element={<Details></Details>}></Route>
              <Route path="ranking" element={<Ranking></Ranking>}></Route>
              <Route
                path="achievements"
                element={<Achievements></Achievements>}
              ></Route>
            </Route>
            <Route index element={<Navigate to="games"></Navigate>}></Route>
          </Route>
          //   </Routes>
        )}
      </Routes>
    </React.Fragment>
  );
}

export default App;
