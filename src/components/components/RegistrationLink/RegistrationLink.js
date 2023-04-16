import { useDispatch } from 'react-redux';
import { fetchRequestToken } from '../../../store/authorization/authorizationSlice';
import Link from '../../UI/Link/Link';
import { getRegistrationLink } from '../../../utils/constants';

function RegistrationLink({ place }) {
    const dispatch = useDispatch();

    // generate registration link in TMDB with request token and open in new tab

    async function handleRegister(evt) {
        evt.preventDefault();

        dispatch(fetchRequestToken())
            .then(({ payload }) => getRegistrationLink(payload))
            .then(url => window.open(url, "_blank", "noreferrer"));
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