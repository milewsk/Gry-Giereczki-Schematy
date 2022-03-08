import react, { useState } from "react";

// passing to hook argument function which takes value as parameter and returns true or false
// after checking validity inside.

const useInput = (validationFunction) => {
  // States to control, update value and if input was already touched by user
  const [enteredValue, setEnteredValue] = useState("");
  const [isInputTouched, setIsInputTouched] = useState(false);

  const isInputValid = validationFunction(enteredValue);
  const hasError = !isInputValid && isInputTouched;

  const inputValueHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurrHandler = () => {
    setIsInputTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsInputTouched(false);
  };

  return {
    enteredValue: enteredValue,
    isInputValid: isInputValid,
    hasError: hasError,
    inputValueHandler: inputValueHandler,
    inputBlurrHandler: inputBlurrHandler,
    reset: reset,
  };
};

export default useInput;
