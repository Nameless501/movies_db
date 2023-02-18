import { useState } from 'react';
import { useUserContext } from '../../../contexts/UserContext';
import HeaderWrapper from '../../components/HeaderWrapper/HeaderWrapper';
import AuthMenu from '../../components/AuthMenu/AuthMenu';
import LandingHeaderMenu from '../../components/LandingHeaderMenu/LandingHeaderMenu';

function HeaderLanding() {
    const { userIsLogged } = useUserContext();
    const [sideBarIsOpen, setSideBarState] = useState(false);

    function handleSideBarToggle() {
        setSideBarState(current => !current);
    }

    return (
        <HeaderWrapper
            sideBarIsOpen={sideBarIsOpen}
            handleSideBarToggle={handleSideBarToggle}
            place='landing'
        >
            {userIsLogged ?
                <LandingHeaderMenu
                    handleSideBarOpen={handleSideBarToggle}
                />
                :
                <AuthMenu />
            }
        </HeaderWrapper>
    );
}

export default HeaderLanding;