import SignButton from '../../UI/SignButton/SignButton';
import { routesConfig } from '../../../utils/configs';
import './AuthMenu.css';

function AuthMenu() {
    return (
        <nav className='auth-menu' >
            <ul className='auth-menu__buttons' >
                <li>
                    <SignButton
                        classType='sign-in'
                        text='Регистрация'
                        to={routesConfig.signUp}
                    />
                </li>
                <li>
                    <SignButton
                        classType='sign-up'
                        text='Войти'
                        to={routesConfig.signIn}
                    />
                </li>
            </ul>
        </nav>
    );
}

export default AuthMenu;