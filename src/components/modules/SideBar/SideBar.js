import { useState } from 'react';
import { useSelector } from 'react-redux';
import PopupWrapper from '../../components/PopupWrapper/PopupWrapper';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import BurgerButton from '../../UI/BurgerButton/BurgerButton';
import AuthMenu from '../../components/AuthMenu/AuthMenu';
import './SideBar.css';

function SideBar() {
    const [isOpen, setIsOpen] = useState(false);
    const { isLoggedIn } = useSelector((state) => state.user);


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
                        isLoggedIn ?
                            // <ProfileButton place='side-bar' />
                            <></>
                            :
                            <AuthMenu place='side-bar' />
                    }
                </div>
            </PopupWrapper>
        </>
    );
}

export default SideBar;