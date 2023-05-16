import "./BurgerButton.css";

function BurgerButton({ place, active, handleClick }) {
  return (
    <button
      type="button"
      className={`
                burger-button
                ${place && "burger-button_place_" + place}
                ${active && "burger-button_active"}
            `}
      onClick={handleClick}
    >
      <div className="burger-button__line burger-button__line_top" />
      <div className="burger-button__line burger-button__line_middle" />
      <div className="burger-button__line burger-button__line_bottom" />
    </button>
  );
}

export default BurgerButton;
