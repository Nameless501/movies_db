import { useState } from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
import ProfileButton from '../../UI/ProfileButton/ProfileButton';
import BurgerButton from '../../UI/BurgerButton/BurgerButton';
import AuthMenu from '../AuthMenu/AuthMenu';
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
            />
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
        </>
    );
}

export default SideBar;