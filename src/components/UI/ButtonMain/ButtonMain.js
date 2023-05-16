import "./ButtonMain.css";

function ButtonMain({
  as: Wrapper = "button",
  to,
  place,
  text,
  handleClick,
  disabled,
  type = "button",
}) {
  return (
    <Wrapper
      to={to}
      type={type}
      onClick={handleClick}
      disabled={disabled}
      className={`
                button-main
                ${place && "button-main_place_" + place}
            `}
    >
      {text}
    </Wrapper>
  );
}

export default ButtonMain;
