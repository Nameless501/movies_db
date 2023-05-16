import { NavLink } from "react-router-dom";
import "./NavigationLink.css";

function NavigationLink({ to, text, place }) {
  return (
    <NavLink
      exact
      to={to}
      className={`
                navigation-link
                ${place ? "navigation-link_place_" + place : null}
            `}
      activeClassName="navigation-link_active"
    >
      {text}
    </NavLink>
  );
}

export default NavigationLink;
