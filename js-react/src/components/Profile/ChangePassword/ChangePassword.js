import { Fragment, useEffect, useRef, useState } from "react";
import { NavLink, Outlet, Link } from "react-router-dom";
import classes from "./ChangePassword.module.css";
import useInput from "../../../hooks/use-input";

const ChangePassword = (props) => {
  //  state for form Validation
  const [isFormVaild, setIsFormValid] = useState(false);

  //  Inputs
  const {
    enteredValue: enteredOldPassword,
    isInputValid: isOldPasswordVaild,
    inputBlurrHandler: oldPasswordBlurrHandler,
    inputValueHandler: oldPasswordValueHandler,
    hasError: oldPasswordHasError,
  } = useInput((value) => {
    return value.trim().length > 6;
  });

  const {
    enteredValue: enteredNewPassword,
    isInputValid: isNewPasswordVaild,
    inputBlurrHandler: newPasswordBlurrHandler,
    inputValueHandler: newPasswordValueHandler,
    hasError: newPasswordHasError,
  } = useInput((value) => {
    return value.trim().length > 6;
  });

  // checking when valid value was changed
  useEffect(() => {
    const identifier = setTimeout(() => {
      setIsFormValid(isNewPasswordVaild && isOldPasswordVaild);
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [isNewPasswordVaild, isOldPasswordVaild]);

  //   Event Handler
  const SubmitHandler = (event) => {
    event.PreventDefalut();

    if (enteredNewPassword === enteredOldPassword) {
      //bład
    }

    //zapytanie do bazy
    // 1. o obecne hasło => porównanie => wysłanie rządania zmiany => informacja zwrotna => ew. przekierowanie i wylogowanie
    // 2. wszystko razem => informacja zwrotna => ew. przekierowanie i wylogowanie
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
          <input
            value={enteredOldPassword}
            onChange={oldPasswordValueHandler}
            onBlur={oldPasswordBlurrHandler}
            placeholder="Podaj stare hasło"
          ></input>
          <label>Nowe hasło</label>
          <input
            value={enteredNewPassword}
            onChange={newPasswordValueHandler}
            onBlur={newPasswordBlurrHandler}
            placeholder="Podaj nowe hasło"
          ></input>
          <button disabled={!isFormVaild}>Zmień</button>
        </form>
      </div>
    </Fragment>
  );
};

export default ChangePassword;
