import ButtonMain from "../../UI/ButtonMain/ButtonMain";
import RegistrationLink from "../RegistrationLink/RegistrationLink";
import ErrorMessage from "../../UI/ErrorMessage/ErrorMessage";
import PreloaderSmall from "../../UI/PreloaderSmall/PreloaderSmall";
import "./SignFormWrapper.css";

function SignFormWrapper({ loading, disabled, onSubmit, error, children }) {
  return (
    <form className="sign-form" onSubmit={onSubmit}>
      <fieldset className="sign-form__fieldset">{children}</fieldset>
      <div className="sign-form__button-wrapper">
        <ErrorMessage text={error} place="sign-form" />
        {loading === "pending" ? (
          <PreloaderSmall place="form" />
        ) : (
          <ButtonMain
            text="Войти"
            type="submit"
            disabled={disabled}
            place="form"
          />
        )}
        <div className="sign-form__link">
          <span className="sign-form__link-text">Ещё не зарегистрированы?</span>
          <RegistrationLink place="form" />
        </div>
      </div>
    </form>
  );
}

export default SignFormWrapper;
