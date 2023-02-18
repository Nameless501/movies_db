import photo from '../../../images/profile_avatar.jpg';
import './StudentPhoto.css';

function StudentPhoto() {
    return (
        <img
            src={photo}
            alt='фотография автора'
            className='student-photo'
        />
    );
}

export default StudentPhoto;