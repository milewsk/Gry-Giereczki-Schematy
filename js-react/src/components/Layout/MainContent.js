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

  return <main className={classes.main_content}></main>;
};

export default MainContent;
