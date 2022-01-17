import React, { useContext } from "react";
import AuthContext from "../../store/AuthContext";
import GameContext from "../../store/GameContext";
import Login from "../Login/Login";
import Button from "../UI/Button/Button";
import classes from "./MainContent.module.css";

const MainContent = (props) => {
  const authCtx = useContext(AuthContext);
  const GameCtx = useContext(GameContext);
  return (
    <main className={classes.main_content}>
      {!authCtx.isLoggedIn && <Login></Login>}
      {authCtx.isLoggedIn && (
        <div>
          <Button onClick={GameCtx.GameNumber(1)}>Gra Kamień papier</Button>
          <Button onClick={GameCtx.GameNumber(2)}>Gra Kostka</Button>
          <Button onClick={GameCtx.GameNumber(3)}>Gra 3</Button>
          {GameCtx.chosenGame == 1 && <div>Gra pierwsza wywołana</div>}
        </div>
      )}
    </main>
  );
};

export default MainContent;
