import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSessionId } from '../../../store/user/userSlice';
import LogoLink from '../../components/LogoLink/LogoLink';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import ProfileButton from '../../UI/ProfileButton/ProfileButton';
import AuthMenu from '../../components/AuthMenu/AuthMenu';
import './Header.css';

function Header({ place }) {
    const { isLoggedIn, loading } = useSelector((state) => state.user);
    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const requestToken = queryParams.get('request_token');
        const approved = queryParams.get('approved');

        if (requestToken && approved) {
            dispatch(fetchSessionId(requestToken));
        }
    }, [location, dispatch]);

    return (
        <>
            <header className='header' >
                <div className='header__content-wrapper' >
                    <LogoLink />
                    <div className='header__menu'>
                        <div className='header__menu-desktop'>
                            <NavigationBar place='header' />
                            {
                                isLoggedIn ?
                                    <ProfileButton place={place} />
                                    :
                                    <AuthMenu
                                        place={place}
                                    />
                            }
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;