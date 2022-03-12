import { useEffect, useState, useReducer, useContext, Fragment } from "react";
import AuthContext from "../../store/AuthContext";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import classes from "./Login.module.css";
import { NavLink } from "react-router-dom";

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

const Register = (props) => {
  const authCtx = useContext(AuthContext);

  const [formIsValid, setFormIsValid] = useState(false);
  const [usernameState, dispatchUsername] = useReducer(usernameReducer, {
    value: "",
    isValid: null,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(usernameState.isValid && passwordState.isValid);
    }, 500);
    return () => {
      clearTimeout(identifier);
    };
  }, [usernameState.isValid, passwordState.isValid]);

  const usernameChangeHandler = (event) => {
    dispatchUsername({ type: "USER_INPUT", value: event.target.value });

    setFormIsValid(usernameState.isValid && passwordState.isValid);
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", value: event.target.value });

    setFormIsValid(passwordState.isValid && usernameState.isValid);
  };

  const validateUsernameHandler = () => {
    dispatchUsername({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    authCtx.onLogin(usernameState.value, passwordState.value);
  };

  return (
    <Fragment>
      <Card className={`text-center ${classes.login}`}>
        <form onSubmit={submitHandler} className="d-flex flex-column">
          <h5>Zarejestruj się</h5>
          <div
            className={`${classes.control} my-3 ${
              usernameState.isValid === false ? classes.invalid : ""
            }`}
          >
            <div className="form-floating mb-3">
              <input 
                type="username" 
                className="form-control" 
                id="username" 
                placeholder="name@example.com" 
                value={usernameState.value}
                onChange={usernameChangeHandler}
                onBlur={validateUsernameHandler}
                />
              <label htmlFor="username">Nazwa użytkownika</label>
            </div>
            <div className="form-floating">
              <input 
                type="password" 
                className="form-control" 
                id="password" 
                value={passwordState.value}
                onChange={passwordChangeHandler}
                onBlur={validatePasswordHandler}
                placeholder="Password"/>
              <label htmlFor="password">Hasło</label>
            </div>
          </div>
          <div
            className={`${classes.control} ${
              passwordState.isValid === false ? classes.invalid : ""
            }`}
          >
          </div>
          <div className={classes.actions}>
            <Button
              type="submit"
              className={`${classes.btn_login}`}
              disabled={!formIsValid}
              onClick={authCtx.onLogin}
            >
              Zarejestruj się
            </Button>
          </div>
        </form>
      </Card>
      <p className="text-center">Posiadasz już konto?<NavLink to="/login"> Zaloguj się</NavLink></p>
    </Fragment>
  );
};

export default Register;
