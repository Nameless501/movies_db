import NavigationBar from '../NavigationBar/NavigationBar';
import ProfileButton from '../../UI/ProfileButton/ProfileButton';
import BurgerButton from '../../UI/BurgerButton/BurgerButton';
import './MainHeaderMenu.css';

function MainHeaderMenu({ handleSideBarOpen }) {
    return (
        <div className='header-menu-main'>
            <div className='header-menu-main__desktop-wrapper'>
                <NavigationBar place='main' />
                <ProfileButton />
            </div>
            <div className='header-menu-main__mobile-wrapper'>
                <BurgerButton
                    handleClick={handleSideBarOpen}
                />
            </div>
        </div>
    );
}

export default MainHeaderMenu;