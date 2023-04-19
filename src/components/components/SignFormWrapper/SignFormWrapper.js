import FormButton from '../../UI/FormButton/FormButton';
import RegistrationLink from '../RegistrationLink/RegistrationLink';
import ErrorMessage from '../../UI/ErrorMessage/ErrorMessage';
import './SignFormWrapper.css';

function SignFormWrapper({ type, disabled, onSubmit, error, children }) {
    return (
        <form
            className='sign-form'
            onSubmit={onSubmit}
        >
            <fieldset className='sign-form__fieldset' >
                {children}
            </fieldset>
            <div className='sign-form__button-wrapper' >
                <ErrorMessage
                    text={error}
                    place='sign-form'
                />
                <FormButton
                    text='Войти'
                    disabled={disabled}
                />
                <div className='sign-form__link' >
                    <span className='sign-form__link-text' >
                        Ещё не зарегистрированы?
                    </span>
                    <RegistrationLink
                        place='form'
                    />
                </div>
            </div>
        </form>
    );
}

export default SignFormWrapper;