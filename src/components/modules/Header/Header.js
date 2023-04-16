import { useSelector } from 'react-redux';
import LogoLink from '../../components/LogoLink/LogoLink';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import ProfileButton from '../../UI/ProfileButton/ProfileButton';
import AuthMenu from '../../components/AuthMenu/AuthMenu';
import PreloaderSmall from '../../UI/PreloaderSmall/PreloaderSmall';
import './Header.css';

function Header({ place }) {
    const { isLoggedIn, loading } = useSelector((state) => state.user);

    return (
        <>
            <header className='header' >
                <div className='header__content-wrapper' >
                    <LogoLink />
                    <div className='header__menu'>
                        <div className='header__menu-desktop'>
                            <NavigationBar place='header' />
                            <div className='header__authorization'>
                                { loading === 'pending' && <PreloaderSmall /> }
                                { (isLoggedIn && loading !== 'pending') && <ProfileButton place={place} /> }
                                { (!isLoggedIn && loading !== 'pending') && <AuthMenu place={place} /> }
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;