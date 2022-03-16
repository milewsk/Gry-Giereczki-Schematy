import { Fragment } from "react";
import { NavLink, Outlet } from "react-router-dom";
import classes from "./Games.module.css";

const Games = (props) => {
  return (
    <Fragment>
      {" "}
      <section className={classes.game_picker}>
        <NavLink to="game1">Gra w kamień, <br />papier, nożyce</NavLink>
        <NavLink to="game2">Gra w kostkę</NavLink>
        <NavLink to="game3">Gra w statki / nadal login</NavLink>
      </section>
      <Outlet></Outlet>
    </Fragment>
  );
};

export default Games;
