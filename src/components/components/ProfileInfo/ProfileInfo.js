import { useSelector } from 'react-redux';
import ProfileMenu from '../ProfileMenu/ProfileMenu';
import './ProfileInfo.css'

import avatarFallback from '../../../images/icon_photo_fallback.png';

function ProfileInfo() {
    const { data } = useSelector((state) => state.user);

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
            <div className='profile-info__menu-wrapper'  >
                <ProfileMenu
                    place='header'
                />
            </div>
        </div>
    );
}

export default ProfileInfo;