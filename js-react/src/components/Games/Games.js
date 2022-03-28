import { Fragment } from "react";
import { NavLink, Outlet } from "react-router-dom";
import classes from "./Games.module.css";
import GameCard from "../UI/GameCard/GameCard";
import kpn from "../../assets/kpn.png"
import kostka from "../../assets/kostka.png"

const Games = (props) => {
  return (
    <Fragment>
      {" "}
      <section className="container-lg">
        <div className="row d-flex flex-wrap justify-content-center align-items-center mt-5">
          <div className="col d-flex justify-content-center align-items-center">
            <GameCard imgSrc={kpn} to="../game1" gameTitle="Kamień, papier, nożyce"></GameCard>
          </div>
          <div className="col d-flex justify-content-center align-items-center">
            <GameCard imgSrc={kostka} to="../game2" gameTitle="Kostka"></GameCard>
          </div>
          <div className="col d-flex justify-content-center align-items-center">
            <GameCard imgSrc={kpn} to="../game3" gameTitle="Statki"></GameCard>
          </div>
        </div>
      </section>
      <Outlet></Outlet>
    </Fragment>
  );
};

export default Games;
