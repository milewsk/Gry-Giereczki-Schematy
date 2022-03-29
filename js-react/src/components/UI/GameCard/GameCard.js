import React from "react";
import classes from "./GameCard.module.css";
import { NavLink } from "react-router-dom";

const GameCard = (props) => {
  return (
    <NavLink to={props.to}
        className={`${classes.card} d-flex flex-column align-items-center py-3 px-1 mb-4`}
        >
        <img src={props.imgSrc} className="mb-3"></img>
        <h6 className="text-white fw-bold">{props.gameTitle}</h6>
    </NavLink>
  );
};

export default GameCard;
