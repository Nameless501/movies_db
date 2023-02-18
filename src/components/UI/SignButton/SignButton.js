import { Link } from 'react-router-dom';
import './SignButton.css';

function SignButton({ classType, text, to='/' }) {
    return (
        <Link
            to={to}
            className={`
                sign-button
                ${classType ? 'sign-button_type_' + classType : null}
            `}
        >
            {text}
        </Link>
    );
}

export default SignButton;