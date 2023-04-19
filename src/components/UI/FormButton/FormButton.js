import './FormButton.css';

function FormButton({ text, disabled, type = 'submit', handleClick }) {
    return (
        <button
            className='form-button'
            type={type}
            disabled={disabled}
            onClick={handleClick}
        >
            {text}
        </button>
    );
}

export default FormButton;