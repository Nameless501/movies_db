import { usePortalContext } from '../../../contexts/PortalContext';
import LinkButton from '../../UI/LinkButton/LinkButton';
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
                    {/* <LinkButton
                        text='Регистрация'
                        link={routesConfig.signUp}
                        place='sign-in'
                    /> */}
                    <button
                        className='link-button link-button_place_sign-in'
                        onClick={openConstructionPopup}
                    >
                        Регистрация
                    </button>
                </li>
                <li>
                    <LinkButton
                        text='Войти'
                        link={routesConfig.signIn}
                        place='sign-up'
                    />
                </li>
            </ul>
        </nav>
    );
}

export default AuthMenu;