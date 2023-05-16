import "./Link.css";

function Link({ href, place, text, target = "_blank", handleClick }) {
  return (
    <a
      href={href}
      className={`
                link
                ${place ? "link_place_" + place : null}
            `}
      target={target}
      onClick={handleClick}
    >
      {text}
    </a>
  );
}

export default Link;
