import TextInput from "../../UI/TextInput/TextInput";
import ErrorMessage from "../../UI/ErrorMessage/ErrorMessage";
import "./FormInput.css";

function FormInput(props) {
  return (
    <div className="form-input">
      <label htmlFor={props.id} className="form-input__label">
        {props.label}
      </label>
      <div className="form-input__input-wrapper">
        <TextInput {...props} />
        <ErrorMessage text={props.errorMessage} place={props.place} />
      </div>
    </div>
  );
}

export default FormInput;
