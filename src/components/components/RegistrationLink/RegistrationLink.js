import { useDispatch } from 'react-redux';
import { fetchRequestToken } from '../../../store/user/userSlice';
import Link from '../../UI/Link/Link';
import { getRegistrationLink } from '../../../utils/constants';

function RegistrationLink({ place }) {
    const dispatch = useDispatch();

    // generate registration link in TMDB with request token and open in new tab

    async function handleRegister(evt) {
        evt.preventDefault();

        const requestTokenResponse = await dispatch(fetchRequestToken());
        const requestToken = requestTokenResponse.payload.request_token;

        const url = getRegistrationLink(requestToken);
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