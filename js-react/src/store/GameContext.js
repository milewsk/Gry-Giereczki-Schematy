import React, { useState, useEffect } from "react";

const GameContext = React.createContext({
  chosenGame: 0,
  GameNumber: () => {},
});

export const GameContextProvider = (props) => {
  const [chosenGame, setChosenGame] = useState(0);

  useEffect(() => {}, []);

  const chosenGameHandler = (number) => {
    setChosenGame(number);
  };

  return (
    <GameContext.Provider
      value={{
        chosenGame: chosenGame,
        GameNumber: chosenGameHandler,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};

export default GameContext;
