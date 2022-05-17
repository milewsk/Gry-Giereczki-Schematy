import React, {
  useState,
  useEffect,
  useReducer,
  useContext,
  Fragment,
  useRef,
} from "react";
import AuthContext from "../../store/AuthContext";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import classes from "./Login.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import useInput from "../../hooks/use-input";
import useInputSubmit from "../../hooks/use-input-submit";

const Login = (props) => {
  const authCtx = useContext(AuthContext);

  const navigate = useNavigate();

  const usernameRef = useRef();
  const passwordRef = useRef();

  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isUsernameValid, setIsUsernameValid] = useState(true);

  const [isLoading, setIsLoading] = useState(false);

  // Submit input
  const onFocusUsernameHandler = () => {
    setIsUsernameValid(true);
  };

  const onFocusPasswordHandler = () => {
    setIsPasswordValid(true);
  };

  let formIsValid = false;

  if (isPasswordValid && isUsernameValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredUsername = usernameRef.current.value;
    const enteredPassword = passwordRef.current.value;

    if (enteredUsername.length < 4) {
      setIsUsernameValid(false);
      return;
    }

    if (enteredPassword.length < 4) {
      setIsPasswordValid(false);
      return;
    }

    // if something is wrong don't send and change anything
    // if (!isPasswordValid && !isUsernameValid) {
    //   return;
    // }

    setIsLoading(true);

    fetch("https://localhost:44342/api/auth/login", {
      method: "POST",
      body: JSON.stringify({
        Nick: enteredUsername,
        Password: enteredPassword,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return response.json().then((data) => {
            let errorMessage = "Authentication failed";

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        console.log(data);
        if (data.message === "success login") {
          console.log("logowanie pomyślne");
          const expirationTime = new Date(
            new Date().getTime() + Number(6000000)
          );

          authCtx.onLogin(232123, expirationTime.toISOString());
          console.log(authCtx.isLoggedIn);
        }
      })
      .catch((error) => {
        alert(error.message);
      });

    // authCtx.onLogin(usernameState.value, passwordState.value);
    // authCtx.onLogin(enteredUsername, enteredPassword);

    setIsLoading(false);
  };

  return (
    <Fragment>
      <Card className={`text-center ${classes.login}`}>
        <form onSubmit={submitHandler} className="d-flex flex-column">
          <h5>Zaloguj się</h5>
          <div
            className={`${classes.control} my-3 ${
              isUsernameValid === false ? classes.invalid : ""
            }`}
          >
            <div className="form-floating mb-3">
              <input
                type="username"
                className="form-control"
                id="username"
                placeholder="name@example.com"
                onFocus={onFocusUsernameHandler}
                ref={usernameRef}
              />
              <label htmlFor="username">Nazwa użytkownika</label>
            </div>
            {/* {usernameHasError && <p>Błąd w login</p>} */}
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="password"
                ref={passwordRef}
                onFocus={onFocusPasswordHandler}
                placeholder="Password"
              />
              <label htmlFor="password">Hasło</label>
            </div>
            {/* {usernameHasError && <p>Błąd w login</p>} */}
          </div>
          <div
            className={`${classes.control} ${
              isPasswordValid === false ? classes.invalid : ""
            }`}
          ></div>
          <div className={classes.actions}>
            <Button
              type="submit"
              className={`${classes.btn_login}`}
              disabled={!formIsValid}
            >
              Zaloguj się
            </Button>
          </div>
        </form>
      </Card>
      <p className="text-center">
        Nie masz jeszcze konta?
        <NavLink to="/register"> Zarejestruj się!</NavLink>
      </p>
    </Fragment>
  );
};

export default Login;
