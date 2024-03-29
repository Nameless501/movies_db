import { useEffect } from "react";
import useFormStateAndValidation from "../../../hooks/useFormStateAndValidation";
import SignFormWrapper from "../../components/SignFormWrapper/SignFormWrapper";
import FormInput from "../../components/FormInput/FormInput";

function SignInForm({ handleSubmit, loading, error }) {
  const {
    inputsValues,
    errorMessages,
    formIsValid,
    handleInputChange,
    resetFormValues,
  } = useFormStateAndValidation();

  function onSubmit(evt) {
    evt.preventDefault();
    handleSubmit(inputsValues);
  }

  useEffect(() => {
    return () => {
      resetFormValues();
    };
  }, [resetFormValues]);

  return (
    <SignFormWrapper
      onSubmit={onSubmit}
      disabled={!formIsValid || loading === "pending"}
      loading={loading}
      error={error}
    >
      <FormInput
        label="Логин"
        type="text"
        name="username"
        required={true}
        place="form"
        errorMessage={errorMessages.username}
        value={inputsValues.username}
        // handleChange={(evt) => handleInputChange(evt, { customValidation: true })}
        handleChange={handleInputChange}
      />
      <FormInput
        label="Пароль"
        type="password"
        name="password"
        required={true}
        place="form"
        errorMessage={errorMessages.password}
        value={inputsValues.password}
        handleChange={handleInputChange}
      />
    </SignFormWrapper>
  );
}

export default SignInForm;
