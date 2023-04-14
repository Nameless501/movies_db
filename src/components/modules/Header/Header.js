import { useDispatch, useSelector } from 'react-redux';
import { fetchRequestToken } from '../../../store/user/userSlice';
import LogoLink from '../../components/LogoLink/LogoLink';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import ProfileButton from '../../UI/ProfileButton/ProfileButton';
import AuthMenu from '../../components/AuthMenu/AuthMenu';
import { USER_API_PATH_REGISTRATION } from '../../../utils/constants';
import './Header.css';

function Header({ place }) {
    const { isLoggedIn, loading } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    // generate registration link in TMDB with request token and open in new tab

    async function handleRegister(evt) {
        evt.preventDefault();

        const requestTokenResponse = await dispatch(fetchRequestToken());
        const requestToken = requestTokenResponse.payload.request_token;

        const url = USER_API_PATH_REGISTRATION + requestToken;
        window.open(url, "_blank", "noreferrer");
    };

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
                                        handleRegister={handleRegister}
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