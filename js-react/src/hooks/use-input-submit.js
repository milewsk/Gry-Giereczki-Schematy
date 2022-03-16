import { useRef, useState } from "react";

const useInputSubmit = (validationFunction, errorMessage) => {
  const referenceValue = useRef();
  const [errorOccured, setErrorOccured] = useState(false);

  const invalidFieldStyle = () => {
    referenceValue.current.style = "";
  };

  const checkRefValidation = () => {
    if (!validationFunction(referenceValue.current.value)) {
      setErrorOccured(true);

      invalidFieldStyle();
    }
  };

  const resetErrorStatus = () => {
    //back styles to normal

    setErrorOccured(false);
  };

  return {
    referenceValue,
    errorOccured,
    checkRefValidation,
  };
};

export default useInputSubmit;
