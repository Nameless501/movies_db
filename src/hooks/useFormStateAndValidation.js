import { useCallback, useState, useRef, useEffect } from "react";
import { validationConfig } from "../utils/configs";

function useFormStateAndValidation(initialValue = {}) {
  const [inputsValues, setInputsValues] = useState(initialValue);
  const [errorMessages, setErrorMessages] = useState({});
  const [formIsValid, setFormValidity] = useState(false);
  const formRef = useRef(null);

  // set inputs values and error messages

  function handleStoreValues(name, value) {
    setInputsValues((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleErrorMessage(name, message) {
    setErrorMessages((current) => ({
      ...current,
      [name]: message,
    }));
  }

  // save ref to current form for validation check

  function handleSaveFormRef(evt) {
    formRef.current ??= evt.target.closest("form");
  }

  // validation handlers

  function handleDefaultValidation(name, validationMessage) {
    const isValid = formRef.current?.checkValidity();

    handleErrorMessage(name, validationMessage);
    setFormValidity(isValid);
  }

  function handleCustomValidation(name, value) {
    const { pattern, validationError, emptyError } = validationConfig[name];

    const match = pattern.test(value);
    const message = !value ? emptyError : match ? "" : validationError;

    handleErrorMessage(name, message);
  }

  // input and toggle handlers

  function handleInputChange(evt, config = { customValidation: false }) {
    const { name, value, validationMessage } = evt.target;

    handleStoreValues(name, value);
    handleSaveFormRef(evt);

    if (config.customValidation) {
      handleCustomValidation(name, value);
    } else {
      handleDefaultValidation(name, validationMessage);
    }
  }

  function handleRadioChange(evt) {
    const { name, value } = evt.target;

    setInputsValues((current) => ({
      ...current,
      [name]: value,
    }));
  }

  // reset values handler

  const resetFormValues = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setInputsValues(newValues);
      setErrorMessages(newErrors);
      setFormValidity(newIsValid);
    },
    [setInputsValues, setErrorMessages, setFormValidity]
  );

  // set form validity depending on default validation and errors

  useEffect(() => {
    const isValid = formRef.current?.checkValidity();
    const isError = Object.keys(errorMessages).some(
      (name) => errorMessages[name]
    );

    setFormValidity(() => isValid && !isError);
  }, [inputsValues, errorMessages]);

  return {
    inputsValues,
    errorMessages,
    formIsValid,
    handleInputChange,
    handleRadioChange,
    resetFormValues,
  };
}

export default useFormStateAndValidation;
