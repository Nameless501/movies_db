import LinkButton from '../../UI/LinkButton/LinkButton';
import Link from '../../UI/Link/Link';
import { routesConfig } from '../../../utils/configs';
import './AuthMenu.css';

function AuthMenu({ place, handleRegister }) {
    return (
        <nav className='auth-menu' >
            <ul
                className={`
                    auth-menu__buttons
                    ${ place && 'auth-menu__buttons_place_' + place }
                `}
            >
                <li>
                    <Link
                        handleClick={handleRegister}
                        text='Регистрация'
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