import React, {
  useState,
  useEffect,
  useReducer,
  useContext,
  Fragment,
} from "react";
import AuthContext from "../../store/AuthContext";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import classes from "./Login.module.css";
import { NavLink } from "react-router-dom";
import useInput from "../../hooks/use-input";

const usernameReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.value, isValid: action.value.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.value, isValid: action.value.trim().length > 6 };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
};

const Login = (props) => {
  const authCtx = useContext(AuthContext);

  // const [formIsValid, setFormIsValid] = useState(false);
  // const [usernameState, dispatchUsername] = useReducer(usernameReducer, {
  //   value: "",
  //   isValid: null,
  // });
  // const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
  //   value: "",
  //   isValid: null,
  // });

  // useEffect(() => {
  //   const identifier = setTimeout(() => {
  //     setFormIsValid(usernameState.isValid && passwordState.isValid);
  //   }, 500);
  //   return () => {
  //     clearTimeout(identifier);
  //   };
  // }, [usernameState.isValid, passwordState.isValid]);

  // const usernameChangeHandler = (event) => {
  //   dispatchUsername({ type: "USER_INPUT", value: event.target.value });

  //   setFormIsValid(usernameState.isValid && passwordState.isValid);
  // };

  // const passwordChangeHandler = (event) => {
  //   dispatchPassword({ type: "USER_INPUT", value: event.target.value });

  //   setFormIsValid(passwordState.isValid && usernameState.isValid);
  // };

  // const validateUsernameHandler = () => {
  //   dispatchUsername({ type: "INPUT_BLUR" });
  // };

  // const validatePasswordHandler = () => {
  //   dispatchPassword({ type: "INPUT_BLUR" });
  // };

  // New content

  const {
    enteredValue: enteredUsername,
    isInputValid: isUsernameValid,
    inputBlurrHandler: usernameBlurrHandler,
    inputValueHandler: usernameValueHandler,
    hasError: usernameHasError,
  } = useInput((value) => {
    return value.trim().length > 6;
  });

  const {
    enteredValue: enteredPassword,
    isInputValid: isPasswordValid,
    inputValueHandler: passwordValueHandler,
    inputBlurrHandler: passwordBlurrHandler,
    hasError: passwordHasError,
  } = useInput((value) => {
    return true;
  });

  let formIsValid = false;

  if (isPasswordValid && isUsernameValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    // if something is wrong don't send and change anything
    if (!isPasswordValid && !isUsernameValid) {
      return;
    }

    // authCtx.onLogin(usernameState.value, passwordState.value);
    authCtx.onLogin(enteredUsername, enteredPassword);
  };

  return (
    <Fragment>
      <Card className={classes.login}>
        <form onSubmit={submitHandler}>
          <h5>Zaloguj się</h5>
          <div
            className={`${classes.control} ${
              isUsernameValid === false ? classes.invalid : ""
            }`}
          >
            <label htmlFor="username">Nazwa użytkownika</label>
            <input
              type="username"
              id="username"
              value={enteredUsername}
              onChange={usernameValueHandler}
              onBlur={usernameBlurrHandler}
            />
            {usernameHasError && <p>Błąd w login</p>}
            {/* <label htmlFor="username">Nazwa użytkownika</label>
            <input
              type="username"
              id="username"
              value={usernameState.value}
              onChange={usernameChangeHandler}
              onBlur={validateUsernameHandler}
            /> */}
          </div>
          <div
            className={`${classes.control} ${
              isPasswordValid === false ? classes.invalid : ""
            }`}
          >
            <label htmlFor="password">Hasło</label>
            <input
              type="password"
              id="password"
              value={enteredPassword}
              onChange={passwordValueHandler}
              onBlur={passwordBlurrHandler}
            />
            {passwordHasError && <p>Błąd w login</p>}
            {/* <label htmlFor="password">Hasło</label>
            <input
              type="password"
              id="password"
              value={passwordState.value}
              onChange={passwordChangeHandler}
              onBlur={validatePasswordHandler}
            /> */}
          </div>
          <div className={classes.actions}>
            <Button
              type="submit"
              className={classes.btn}
              disabled={!formIsValid}
              onClick={authCtx.onLogin}
            >
              Zaloguj się
            </Button>
          </div>
        </form>
      </Card>
      <NavLink to="/register">Nie masz jeszcze konta? Zarejestruj się!</NavLink>
    </Fragment>
  );
};

export default Login;
