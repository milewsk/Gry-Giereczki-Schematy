import React, { useContext } from "react";
import AuthContext from "../../store/AuthContext";
import GameContext from "../../store/GameContext";
import Login from "../Login/Login";
import Button from "../UI/Button/Button";
import classes from "./MainContent.module.css";
import { Navigate, NavLink, Outlet, Route, Routes } from "react-router-dom";
import Kostka from "../Games/Kostka/Kostka";
import KPN from "../Games/KPN/KPN";
import Register from "../Login/Register";
// import { Home } from "../../Home";
import Games from "../Games/Games";
import Profile from "../Profile/Profile";
import Ranking from "../Profile/Ranking/Ranking";
import Achievements from "../Profile/Achievements/Achievements";
import Details from "../Profile/Details/Details";
import EditProfile from "../Profile/EditProfile/EditProfile";

const MainContent = (props) => {
  const authCtx = useContext(AuthContext);

  return (
    <main className={classes.main_content}>
      <Routes>
        {!authCtx.isLoggedIn && (
          <Route path="/">
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/register" element={<Register></Register>}></Route>
            <Route index element={<Login></Login>}></Route>
          </Route>
        )}
        {authCtx.isLoggedIn && (
          //   <Routes>

          //tutaj tylko outlet

          // dodać do scieżki "/" element layout
          // w nim przechowywać footera navbara i main content (miejsce na outlet)
          // domyślną kartę, czy to wybór gry czy to jakąś nową stronę powitalną
          <Route path="/">
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
    </main>
  );
};

export default MainContent;
