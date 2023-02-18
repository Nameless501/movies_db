import { Link } from 'react-router-dom';
import { routesConfig } from '../../../utils/configs';
import './ProfileButton.css';

function ProfileButton() {
    return (
        <Link
            to={routesConfig.profile}
            className='profile-button'
        >
            <span className='profile-button__text' >
                Аккаунт
            </span>
            <span className='profile-button__icon' />
        </Link>
    );
}

export default ProfileButton;