import { Link } from 'react-router-dom';
import './LinkButton.css';

function LinkButton({ link, place, text }) {
    return (
        <Link
            to={link}
            className={`
                link-button
                ${place && 'link-button_place_' + place}
            `}
        >
            {text}
        </Link>
    );
}

export default LinkButton;