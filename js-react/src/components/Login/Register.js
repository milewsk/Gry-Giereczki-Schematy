import { useEffect, useState, useReducer, useContext } from "react";
import AuthContext from "../../store/AuthContext";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import classes from "./Register.module.css";

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
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <h5>Zarejestu się</h5>
        <div
          className={`${classes.control} ${
            usernameState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="username">Nazwa użytkownika</label>
          <input
            type="username"
            id="username"
            value={usernameState.value}
            onChange={usernameChangeHandler}
            onBlur={validateUsernameHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Hasło</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button
            type="submit"
            className={classes.btn}
            disabled={!formIsValid}
            onClick={authCtx.onLogin}
          >
            Zarejestruj się
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Register;
