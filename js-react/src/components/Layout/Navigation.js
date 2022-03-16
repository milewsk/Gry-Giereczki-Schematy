import React, { Fragment, useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../../store/AuthContext";
import Button from "../UI/Button/Button";

const Navigation = (props) => {
  const authCtx = useContext(AuthContext);

  return (
    <nav className="d-flex flex-column flex-md-row w-100">
      <Fragment>
        <ul className="navbar-nav flex-column">
          <li className="nav-item d-md-flex w-100 flex-md-row">
            <NavLink className="nav-link" to="/games">Gry</NavLink>
          </li>
        </ul>
      </Fragment>
      {authCtx.isLoggedIn && (
        <Fragment>
          <ul className="navbar-nav d-flex w-100 flex-column flex-md-row justify-content-end">
            <li className="nav-item">
              <NavLink className="nav-link" to="/profile">Moje konto</NavLink>
            </li>
            <li className="nav-item">
              <Button onClick={authCtx.onLogout}>Wyloguj się</Button>
            </li>
          </ul>
        </Fragment>
      )}
      {!authCtx.isLoggedIn && (
        <Fragment>
          <ul className="navbar-nav d-md-flex w-100 flex-md-row justify-content-end">
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">Dołącz do nas</NavLink>
            </li>
          </ul>
        </Fragment>
      )}
    </nav>
  );
};

export default Navigation;
