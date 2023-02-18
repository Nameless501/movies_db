import { useState } from 'react';
import MainHeaderMenu from '../../components/MainHeaderMenu/MainHeaderMenu';
import HeaderWrapper from '../../components/HeaderWrapper/HeaderWrapper';

function HeaderMain() {
    const [sideBarIsOpen, setSideBarState] = useState(false);

    function handleSideBarToggle() {
        setSideBarState(current => !current);
    }

    return (
        <HeaderWrapper
            sideBarIsOpen={sideBarIsOpen}
            handleSideBarToggle={handleSideBarToggle}
            place='main'
        >
            <MainHeaderMenu
                handleSideBarOpen={handleSideBarToggle}
            />
        </HeaderWrapper>
    );
}

export default HeaderMain;