import { useDispatch } from 'react-redux';
import { fetchRequestToken } from '../../../store/user/userSlice';
import Link from '../../UI/Link/Link';
import { USER_API_PATH_REGISTRATION } from '../../../utils/constants';

function RegistrationLink({ place }) {
    const dispatch = useDispatch();

    // generate registration link in TMDB with request token and open in new tab

    async function handleRegister(evt) {
        evt.preventDefault();

        const requestTokenResponse = await dispatch(fetchRequestToken());
        const requestToken = requestTokenResponse.payload.request_token;

        const url = USER_API_PATH_REGISTRATION + requestToken;
        window.open(url, "_blank", "noreferrer");
    };

    return (
        <Link
            handleClick={handleRegister}
            text='Регистрация'
            place='sign-up'
        />
    );
}

export default RegistrationLink;