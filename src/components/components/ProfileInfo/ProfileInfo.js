import { useSelector } from 'react-redux';
import ProfileMenu from '../ProfileMenu/ProfileMenu';
import AvatarImage from '../AvatarImage/AvatarImage';
import './ProfileInfo.css'

function ProfileInfo() {
    const { data } = useSelector((state) => state.user);

    return (
        <div className='profile-info' >
            <AvatarImage
                src={data.avatar.tmdb.avatar_path}
                place='header'
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