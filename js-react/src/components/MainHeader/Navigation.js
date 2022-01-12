import React, { useContext } from "react";
import AuthContext from "../../store/AuthContext";
import classes from "./Navigation.module.css";

const Navigation = (props) => {
  const authCtx = useContext(AuthContext);

  return (
    <nav className={classes.navigation}>
      <ul>
        {authCtx.isLoggedIn && <li>Zalogowany</li>}
        {!authCtx.isLoggedIn && <li>Niezalogowany</li>}
      </ul>
    </nav>
  );
};

export default Navigation;
