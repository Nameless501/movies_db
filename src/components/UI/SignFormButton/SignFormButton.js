import './SignFormButton.css';

function SignFormButton({ text, disabled }) {
    return (
        <button
            className='sign-form-button'
            type='submit'
            disabled={disabled}
        >
            {text}
        </button>
    );
}

export default SignFormButton;