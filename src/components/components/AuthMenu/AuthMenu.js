import SignButton from '../../UI/SignButton/SignButton';
import { routesConfig } from '../../../utils/configs';
import './AuthMenu.css';

function AuthMenu({ place }) {
    return (
        <nav className='auth-menu' >
            <ul className='auth-menu__buttons' >
                <li>
                    <SignButton
                        classType='sign-in'
                        text='Регистрация'
                        to={routesConfig.signUp}
                        place={place}
                    />
                </li>
                <li>
                    <SignButton
                        classType='sign-up'
                        text='Войти'
                        to={routesConfig.signIn}
                        place={place}
                    />
                </li>
            </ul>
        </nav>
    );
}

export default AuthMenu;