import { useSelector, useDispatch } from 'react-redux';
import SignOutButton from '../../UI/SignOutButton/SignOutButton';
import { usePortalContext } from '../../../contexts/PortalContext';
import { fetchSessionDelete } from '../../../store/authorization/authorizationSlice';
import { signOut } from '../../../store/user/userSlice';
import './ProfileInfo.css'

import avatarFallback from '../../../images/icon_photo_fallback.png';

function ProfileInfo() {
    const { data } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const { openConstructionPopup } = usePortalContext();

    function handleSignOut() {
        dispatch(fetchSessionDelete())
            .then(() => dispatch(signOut()));
    }

    return (
        <div className='profile-info' >
            <img
                src={avatarFallback}
                alt='Аватар пользователя'
                className='profile-info__avatar'
            />
            <p className='profile-info__username' >
                {data.username}
            </p>
            <ul className='profile-info__menu' >
                <li className='profile-info__menu-item' >
                    <button
                        className='navigation-link navigation-link_place_header'
                        onClick={openConstructionPopup}
                    >
                        Профиль
                    </button>
                </li>
                <li className='profile-info__menu-item' >
                    <button
                        className='navigation-link navigation-link_place_header'
                        onClick={openConstructionPopup}
                    >
                        Сохраненное
                    </button>
                </li>
                <li className='profile-info__menu-item' >
                    <SignOutButton
                        handleClick={handleSignOut}
                        place='header'
                    />
                </li>
            </ul>
        </div>
    );
}

export default ProfileInfo;