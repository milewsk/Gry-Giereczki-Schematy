import { useEffect, useState, useReducer, useContext, Fragment } from "react";
import AuthContext from "../../store/AuthContext";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import classes from "./Login.module.css";
import { NavLink } from "react-router-dom";
import useInput from "../../hooks/use-input";

const Register = (props) => {
  const authCtx = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false);

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
    return value.trim().length > 4;
  });

  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(isUsernameValid && isPasswordValid);
    }, 500);
    return () => {
      clearTimeout(identifier);
    };
  }, [isPasswordValid, isUsernameValid]);

  const submitHandler = (event) => {
    event.preventDefault();
    setIsLoading(true);

    fetch("https://localhost:44342/api/auth/register", {
      method: "POST",
      body: JSON.stringify({
        Nick: enteredUsername,
        Password: enteredPassword,
        ConfirmPassword: enteredPassword,
        Email: "konrad@gmail.com",
        Name: "konrad",
        Lastname: "Konrad",
        DateOfBirth: 12,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (response.ok) {
          console.log(response);
          return response.json();
        } else {
          console.log(response);
          return response.json().then((data) => {
            console.log(data);
            let errorMessage = "Authentication failed";

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        if (data.Nick !== "") {
          console.log(data);
          const expirationTime = new Date(new Date().getTime() + Number(60000));

          authCtx.onLogin(232123, expirationTime.toISOString());
        }
      })
      .catch((error) => {
        alert(error.message);
      });

    setIsLoading(false);
  };

  return (
    <Fragment>
      <Card className={`text-center ${classes.login}`}>
        <form onSubmit={submitHandler} className="d-flex flex-column">
          <h5>Zarejestruj się</h5>
          <div
            className={`${classes.control} my-3 ${
              usernameHasError === false ? classes.invalid : ""
            }`}
          >
            <div className="form-floating mb-3">
              <input
                type="username"
                className="form-control"
                id="username"
                placeholder="name@example.com"
                value={enteredUsername}
                onChange={usernameValueHandler}
                onBlur={usernameBlurrHandler}
              />
              <label htmlFor="username">Nazwa użytkownika</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="password"
                value={enteredPassword}
                onChange={passwordValueHandler}
                onBlur={passwordBlurrHandler}
                placeholder="Password"
              />
              <label htmlFor="password">Hasło</label>
            </div>
          </div>
          <div
            className={`${classes.control} ${
              passwordHasError === false ? classes.invalid : ""
            }`}
          ></div>
          <div className={classes.actions}>
            <Button
              type="submit"
              className={`${classes.btn_login}`}
              disabled={!formIsValid}
            >
              Zarejestruj się
            </Button>
          </div>
        </form>
      </Card>
      <p className="text-center">
        Posiadasz już konto?<NavLink to="/login"> Zaloguj się</NavLink>
      </p>
    </Fragment>
  );
};

export default Register;
