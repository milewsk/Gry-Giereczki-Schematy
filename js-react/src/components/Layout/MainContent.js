import React, { useContext } from "react";
import AuthContext from "../../store/AuthContext";
import GameContext from "../../store/GameContext";
import Login from "../Login/Login";
import Button from "../UI/Button/Button";
import classes from "./MainContent.module.css";
import { NavLink, Outlet, Route, Routes } from "react-router-dom";
import Kostka from "../Games/Kostka/Kostka";
import Register from "../Login/Register";
import { Home } from "../../Home";
import Games from "../Games/Games";

const MainContent = (props) => {
  const authCtx = useContext(AuthContext);
  const GameCtx = useContext(GameContext);
  return (
    <main className={classes.main_content}>
      {!authCtx.isLoggedIn && (
        <Routes>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
        </Routes>
      )}

      {authCtx.isLoggedIn && (
        <div>
          <Routes>
            <Route path="games" element={<Games></Games>}>
              <Route path="game2" element={<Kostka></Kostka>}></Route>
              <Route path="game1" element={<Kostka></Kostka>}></Route>
              <Route path="game3" element={<Login></Login>}></Route>
            </Route>
          </Routes>
          {/* <Button onClick={GameCtx.GameNumber(1)}>Gra Kamień papier</Button>
          <Button onClick={GameCtx.GameNumber(2)}>Gra Kostka</Button>
          <Button onClick={GameCtx.GameNumber(3)}>Gra 3</Button>
          {GameCtx.chosenGame == 1 && <div>Gra pierwsza wywołana</div>} */}
        </div>
      )}
    </main>
  );
};

export default MainContent;
