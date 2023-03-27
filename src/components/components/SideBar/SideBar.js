import { usePortalContext } from '../../../contexts/PortalContext';
import NavigationBar from '../NavigationBar/NavigationBar';
import ProfileButton from '../../UI/ProfileButton/ProfileButton';
import CloseButton from '../../UI/CloseButton/CloseButton';
import './SideBar.css';

function SideBar() {
    const { toggleSideBar } = usePortalContext();

    return (
        <div className='side-bar' >
            <NavigationBar
                place='side-bar'
                showMainLink={true}
            />
            <ProfileButton />
            <CloseButton
                place='side-bar'
                handleClick={toggleSideBar}
            />
        </div>
    );
}

export default SideBar;