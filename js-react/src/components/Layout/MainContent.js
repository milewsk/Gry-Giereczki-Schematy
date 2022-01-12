import React, { useContext } from "react/cjs/react.development";
import AuthContext from "../../store/AuthContext";
import Login from "../Login/Login";
import classes from "./MainContent.module.css";

const MainContent = (props) => {
  const authCtx = useContext(AuthContext);
  return (
    <main className={classes.main_content}>
      {!authCtx.isLoggedIn && <Login></Login>}
      {authCtx.isLoggedIn && <div></div>}
    </main>
  );
};

export default MainContent;
