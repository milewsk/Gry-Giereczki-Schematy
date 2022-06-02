import { Fragment, useRef, useState } from "react";
import { NavLink, Outlet, Link } from "react-router-dom";
import classes from "./ChangePassword.module.css";

const ChangePassword = (props) => {
  const isFormVaild = useState(false);

  const oldPasswordRef = useRef("");
  const newPasswordRef = useRef("");

  const SubmitHandler = (event) => {
    event.PreventDefalut();
  };

  return (
    <Fragment>
      <div>
        <div>
          <Link to="../"></Link>
        </div>
        <h3>Zmień swoje hasło</h3>
        <p>
          Twoje nowe hasło powinno być dłuższe niż 8 znaków, zawierać minimum 1
          liczbę i znak specjalny{" "}
        </p>
        <form onSubmit={SubmitHandler}>
          <label>Stare hasło</label>
          <input ref={oldPasswordRef} placeholder="Podaj stare hasło"></input>
          <label>Nowe hasło</label>
          <input ref={newPasswordRef} placeholder="Podaj nowe hasło"></input>
          <button></button>
        </form>
      </div>
    </Fragment>
  );
};

export default ChangePassword;
