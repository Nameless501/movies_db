import { useState } from 'react';
import HeaderWrapper from '../../components/HeaderWrapper/HeaderWrapper';
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu';

function Header({ place }) {
    const [sideBarIsOpen, setSideBarState] = useState(false);

    function handleSideBarToggle() {
        setSideBarState(current => !current);
    }

    return (
        <HeaderWrapper
            sideBarIsOpen={sideBarIsOpen}
            handleSideBarToggle={handleSideBarToggle}
            place={place}
        >
            <HeaderMenu
                handleSideBarOpen={handleSideBarToggle}
                isLogged={false}
                place={place}
            />
        </HeaderWrapper>
    );
}

export default Header;