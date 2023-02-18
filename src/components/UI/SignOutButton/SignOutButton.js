import './SignOutButton.css';

function SignOutButton({ handleClick }) {
    return (
        <button
            type='button'
            className='sign-out-button'
            onClick={handleClick}
        >
            Выйти из аккаунта
        </button>
    );
}

export default SignOutButton;