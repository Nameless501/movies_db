import { useSelector } from "react-redux";
import LogoLink from "../../components/LogoLink/LogoLink";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import AuthMenu from "../../components/AuthMenu/AuthMenu";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import PreloaderSmall from "../../UI/PreloaderSmall/PreloaderSmall";
import "./Header.css";

function Header() {
  const { isLoggedIn, loading } = useSelector((state) => state.user);

  return (
    <>
      <header className="header">
        <div className="header__content-wrapper">
          <LogoLink />
          <div className="header__menu">
            <div className="header__menu-desktop">
              <NavigationBar place="header" />
              <div className="header__authorization">
                {loading === "pending" && <PreloaderSmall place="header" />}
                {isLoggedIn && loading !== "pending" && <ProfileInfo />}
                {!isLoggedIn && loading !== "pending" && (
                  <AuthMenu place="header" />
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
