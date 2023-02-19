import LogoLink from '../LogoLink/LogoLink';
import SideBar from '../../components/SideBar/SideBar';
import './HeaderWrapper.css';

function HeaderWrapper({ sideBarIsOpen, handleSideBarToggle, place, children }) {
    return (
        <>
            <header
                className={`
                    header
                    ${place ? 'header_place_' + place : null}
                `}
            >
                <div
                    className={`
                        header__content-wrapper
                        ${place ? 'header__content-wrapper_place_' + place : null}
                    `}
                >
                    <LogoLink />
                    <>
                        {children}
                    </>
                </div>
            </header>
            <SideBar
                isOpen={sideBarIsOpen}
                handleSideBarClose={handleSideBarToggle}
            />
        </>
    );
}

export default HeaderWrapper;