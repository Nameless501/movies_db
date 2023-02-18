import './ErrorMessage.css';

function ErrorMessage({ text, place }) {
    return (
        <span
            className={`
                error-message
                error-message_place_${place}
            `}
        >
            {text}
        </span>
    );
}

export default ErrorMessage;