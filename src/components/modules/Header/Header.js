import LogoLink from '../../components/LogoLink/LogoLink';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import ProfileButton from '../../UI/ProfileButton/ProfileButton';
import AuthMenu from '../../components/AuthMenu/AuthMenu';
import './Header.css';

function Header({ place }) {
    const isLogged = false;

    return (
        <>
            <header className='header' >
                <div className='header__content-wrapper' >
                    <LogoLink />
                    <div className='header__menu'>
                        <div className='header__menu-desktop'>
                            <NavigationBar place='header' />
                            {
                                isLogged ?
                                    <ProfileButton place={place} />
                                    :
                                    <AuthMenu place={place} />
                            }
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;