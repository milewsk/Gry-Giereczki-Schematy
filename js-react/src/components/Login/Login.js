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

// const usernameReducer = (state, action) => {
//   if (action.type === "USER_INPUT") {
//     return { value: action.value, isValid: action.value.includes("@") };
//   }
//   if (action.type === "INPUT_BLUR") {
//     return { value: state.value, isValid: state.value.includes("@") };
//   }
// };

const usernameReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.value, isValid: action.value.trim().length > 6 };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
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
    return value.trim().length > 4;
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
                value={enteredUsername}
                onChange={usernameValueHandler}
                onBlur={usernameBlurrHandler}/>
              <label htmlFor="floatingInput">Nazwa użytkownika</label>
            </div>
            {/* {usernameHasError && <p>Błąd w login</p>} */}
            <div className="form-floating">
              <input 
                type="password" 
                className="form-control" 
                id="password" 
                value={enteredPassword}
                onChange={passwordValueHandler}
                onBlur={passwordBlurrHandler}
                placeholder="Password"/>
              <label htmlFor="floatingPassword">Password</label>
            </div>
            {/* {usernameHasError && <p>Błąd w login</p>} */}
          </div>
          <div
            className={`${classes.control} ${
              isPasswordValid === false ? classes.invalid : ""
            }`}
          >
          </div>
          <div className={classes.actions}>
            <button
              type="submit"
              className={`btn ${classes.btn_login}`}
              disabled={!formIsValid}
              onClick={authCtx.onLogin}
            >
              Zaloguj się
            </button>
          </div>
        </form>
      </Card>
      <p className="text-center">Nie masz jeszcze konta?<NavLink to="/register"> Zarejestruj się!</NavLink></p>
    </Fragment>
  );
};

export default Login;
