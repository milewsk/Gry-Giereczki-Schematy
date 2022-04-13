import React, { useState, useEffect, useCallback } from "react";

let logoutTimer;

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,

  onLogout: () => {},
  onLogin: (token) => {},
});

const calculateRemainingTime = (expirationTime) => {
  // Milisecound right now
  const currentTime = new Date().getTime();
  const adjExpirationTime = new Date(expirationTime).getTime();

  const remainingMiliseconds = adjExpirationTime - currentTime;

  return remainingMiliseconds;
};

const retriveStoredToken = () => {
  if (
    !localStorage.getItem("expirationTime") &&
    !localStorage.getItem("token")
  ) {
    return null;
  }

  const storedToken = localStorage.getItem("token");
  const storedExpirationTime = localStorage.getItem("expirationTime");

  const remainingTime = calculateRemainingTime(storedExpirationTime);

  if (remainingTime <= 6000) {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    return null;
  }

  return {
    token: storedToken,
    duration: remainingTime,
  };
};

export const AuthContextProvider = (props) => {
  const tokenData = retriveStoredToken();
  let initialToken = tokenData ? tokenData.token : null;

  const [token, setToken] = useState(initialToken ? initialToken : "");

  const isLoggedIn = !!token;

  console.log(isLoggedIn);
  console.log(logoutTimer);

  const logoutHandler = useCallback(() => {
    setToken(null);

    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  useEffect(() => {
    if (tokenData) {
      setTimeout(logoutHandler, tokenData.duration);
    }
  }, [tokenData, logoutHandler]);

  const loginHandler = (newToken, expirationTime) => {
    setToken(newToken);

    localStorage.setItem("token", newToken);
    localStorage.setItem("expirationTime", expirationTime);

    const remainingTime = calculateRemainingTime(expirationTime);

    logoutTimer = setTimeout(logoutHandler, remainingTime);
  };
  return (
    <AuthContext.Provider
      value={{
        token: token,
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
