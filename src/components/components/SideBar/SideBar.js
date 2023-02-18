import Portal from '../Portal/Portal';
import NavigationBar from '../NavigationBar/NavigationBar';
import ProfileButton from '../../UI/ProfileButton/ProfileButton';
import CloseButton from '../../UI/CloseButton/CloseButton';
import './SideBar.css';

function SideBar({ isOpen, handleSideBarClose }) {
    return (
        <Portal>
            {isOpen &&
                <div className='side-bar' >
                    <NavigationBar
                        place='side-bar'
                        showMainLink={true}
                    />
                    <ProfileButton />
                    <CloseButton
                        place='side-bar'
                        handleClick={handleSideBarClose}
                    />
                </div>
            }
        </Portal>
    );
}

export default SideBar;