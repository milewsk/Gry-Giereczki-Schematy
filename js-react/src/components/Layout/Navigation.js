import React, { Fragment, useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../../store/AuthContext";
import Button from "../UI/Button/Button";
import classes from "./Navigation.module.css";

const Navigation = (props) => {
  const authCtx = useContext(AuthContext);

  return (
    <nav className={classes.navigation}>
      <Fragment>
        <ul>
          <li>
            <NavLink to="/games">Gry</NavLink>
          </li>
        </ul>
      </Fragment>
      {authCtx.isLoggedIn && (
        <Fragment>
          <NavLink to="/profile">Profil</NavLink>
          <Button onClick={authCtx.onLogout}>Wyloguj się</Button>
        </Fragment>
      )}
      {!authCtx.isLoggedIn && (
        <Fragment>
          <ul>
            <li>
              <NavLink to="/login">Dołącz do nas</NavLink>
            </li>
          </ul>
        </Fragment>
      )}
    </nav>
  );
};

export default Navigation;
