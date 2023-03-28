import { usePortalContext } from '../../../contexts/PortalContext';
import SignButton from '../../UI/SignButton/SignButton';
import { routesConfig } from '../../../utils/configs';
import './AuthMenu.css';

function AuthMenu({ place }) {
    const { openConstructionPopup } = usePortalContext();

    return (
        <nav className='auth-menu' >
            <ul
                className={`
                    auth-menu__buttons
                    ${ place && 'auth-menu__buttons_place_' + place }
                `}
            >
                <li>
                    {/* <SignButton
                        classType='sign-in'
                        text='Регистрация'
                        to={routesConfig.signUp}
                        place={place}
                    /> */}
                    <button
                        className='sign-button sign-button_type_sign-in'
                        onClick={openConstructionPopup}
                    >
                        Регистрация
                    </button>
                </li>
                <li>
                    {/* <SignButton
                        classType='sign-up'
                        text='Войти'
                        to={routesConfig.signIn}
                        place={place}
                    /> */}
                    <button
                        className='sign-button sign-button_type_sign-up'
                        onClick={openConstructionPopup}
                    >
                        Войти
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default AuthMenu;