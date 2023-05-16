import "./TextInput.css";

function TextInput({
  type = "text",
  placeholder,
  pattern,
  required = false,
  place,
  handleChange,
  value,
  name,
  errorMessage,
}) {
  return (
    <input
      className={`
                text-input
                ${place ? "text-input_place_" + place : ""}
                ${errorMessage ? "text-input_state_error" : ""}
            `}
      type={type}
      placeholder={placeholder}
      required={required}
      onChange={handleChange}
      value={value || ""}
      name={name}
      pattern={pattern}
    />
  );
}

export default TextInput;
