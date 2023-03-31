import { useState } from 'react';
import PopupWrapper from '../../components/PopupWrapper/PopupWrapper';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import ProfileButton from '../../UI/ProfileButton/ProfileButton';
import BurgerButton from '../../UI/BurgerButton/BurgerButton';
import AuthMenu from '../../components/AuthMenu/AuthMenu';
import './SideBar.css';

function SideBar({ isLogged = false }) {
    const [isOpen, setIsOpen] = useState(false);

    function toggleSideBar() {
        setIsOpen(current => !current)
    }

    return (
        <>
            <BurgerButton
                handleClick={toggleSideBar}
                place='side-bar'
                active={isOpen}
            />
            <PopupWrapper
                handleClose={toggleSideBar}
                disabled={!isOpen}
            >
                <div
                    className={`
                    side-bar
                    ${isOpen && 'side-bar_opened'}
                `}
                >
                    <NavigationBar
                        place='side-bar'
                        showMainLink={true}
                    />
                    {
                        isLogged ?
                            <ProfileButton place='side-bar' />
                            :
                            <AuthMenu place='side-bar' />
                    }
                </div>
            </PopupWrapper>
        </>
    );
}

export default SideBar;