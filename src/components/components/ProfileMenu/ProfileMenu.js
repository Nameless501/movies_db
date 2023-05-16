import { useDispatch } from "react-redux";
import SignOutButton from "../../UI/SignOutButton/SignOutButton";
import { usePortalContext } from "../../../contexts/PortalContext";
import { fetchSessionDelete } from "../../../store/authorization/authorizationSlice";
import { signOut } from "../../../store/user/userSlice";
import "./ProfileMenu.css";

function ProfileMenu({ place }) {
  const dispatch = useDispatch();
  const { openConstructionPopup } = usePortalContext();

  function openTemporaryPopup() {
    openConstructionPopup("Тут пока еще ведутся работы");
  }

  function handleSignOut() {
    dispatch(fetchSessionDelete()).then(() => dispatch(signOut()));
  }

  return (
    <ul
      className={`
                profile-menu
                ${place && "profile-menu_place_" + place}
            `}
    >
      <li className="profile-menu-item">
        <button
          className={`navigation-link navigation-link_place_${place}`}
          onClick={openTemporaryPopup}
        >
          Профиль
        </button>
      </li>
      <li className="profile-menu-item">
        <button
          className={`navigation-link navigation-link_place_${place}`}
          onClick={openTemporaryPopup}
        >
          Сохраненное
        </button>
      </li>
      <li className="profile-menu-item">
        <SignOutButton handleClick={handleSignOut} place="header" />
      </li>
    </ul>
  );
}

export default ProfileMenu;
