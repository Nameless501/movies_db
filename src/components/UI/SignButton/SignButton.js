import { Link } from 'react-router-dom';
import './SignButton.css';

function SignButton({ classType, text, place, to='/' }) {
    return (
        <Link
            to={to}
            className={`
                sign-button
                ${classType ? 'sign-button_type_' + classType : null}
                ${place ? 'sign-button_place_' + place : null}
            `}
        >
            {text}
        </Link>
    );
}

export default SignButton;