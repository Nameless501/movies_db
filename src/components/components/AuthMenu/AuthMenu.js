import LinkButton from '../../UI/LinkButton/LinkButton';
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
                    <LinkButton
                        text='Войти'
                        link={routesConfig.signIn}
                        place='sign-in'
                    />
                </li>
            </ul>
        </nav>
    );
}

export default AuthMenu;