import NavigationBar from '../NavigationBar/NavigationBar';
import ProfileButton from '../../UI/ProfileButton/ProfileButton';
import BurgerButton from '../../UI/BurgerButton/BurgerButton';
import AuthMenu from '../../components/AuthMenu/AuthMenu';
import './HeaderMenu.css';

function HeaderMenu({ handleSideBarOpen, place, isLogged = false }) {
    return (
        <div className='header-menu'>
            <div className='header-menu__desktop-wrapper'>
                <NavigationBar place={place} />
                {
                    isLogged ?
                        <ProfileButton place={place} />
                        :
                        <AuthMenu place={place} />
                }
            </div>
            <div className='header-menu__mobile-wrapper'>
                <BurgerButton
                    handleClick={handleSideBarOpen}
                    place={place}
                />
            </div>
        </div>
    );
}

export default HeaderMenu;