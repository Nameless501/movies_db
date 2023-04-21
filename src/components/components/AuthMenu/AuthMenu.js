import { Link } from 'react-router-dom';
import ButtonMain from '../../UI/ButtonMain/ButtonMain';
import RegistrationLink from '../RegistrationLink/RegistrationLink';
import { routesConfig } from '../../../utils/configs';
import './AuthMenu.css';

function AuthMenu({ place }) {
    return (
        <nav className='auth-menu' >
            <ul
                className={`
                    auth-menu__buttons
                    ${ place && 'auth-menu__buttons_place_' + place }
                `}
            >
                <li>
                    <RegistrationLink
                        place='sign-up'
                    />
                </li>
                <li>
                    <ButtonMain
                        as={Link}
                        text='Войти'
                        to={routesConfig.signIn}
                        place='sign-in'
                    />
                </li>
            </ul>
        </nav>
    );
}

export default AuthMenu;