import "./SignOutButton.css";

function SignOutButton({ handleClick, place }) {
  return (
    <button
      type="button"
      className={`
                sign-out-button
                ${place && "sign-out-button_place_" + place}
            `}
      onClick={handleClick}
    >
      Выйти
    </button>
  );
}

export default SignOutButton;
