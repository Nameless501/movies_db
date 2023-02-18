import LogoLink from '../LogoLink/LogoLink';
import SideBar from '../../components/SideBar/SideBar';
import './HeaderWrapper.css';

function HeaderWrapper({ sideBarIsOpen, handleSideBarToggle, place, children }) {
    return (
        <>
            <header
                className={`
                    header-wrapper
                    ${ place ? 'header-wrapper_place_' + place : null }
                `}
            >
                <LogoLink />
                <>
                    {children}
                </>
            </header>
            <SideBar
                isOpen={sideBarIsOpen}
                handleSideBarClose={handleSideBarToggle}
            />
        </>
    );
}

export default HeaderWrapper;