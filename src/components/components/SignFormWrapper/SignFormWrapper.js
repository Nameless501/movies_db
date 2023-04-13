import SignFormButton from '../../UI/SignFormButton/SignFormButton';
import NavigationLink from '../../UI/NavigationLink/NavigationLink';
import ErrorMessage from '../../UI/ErrorMessage/ErrorMessage';
import { routesConfig } from '../../../utils/configs';
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
                <SignFormButton
                    text='Войти'
                    disabled={disabled}
                />
                <div className='sign-form__link' >
                    <span className='sign-form__link-text' >
                        Ещё не зарегистрированы?
                    </span>
                    <NavigationLink
                        text='Регистрация'
                        to={routesConfig.main}
                        place='form'
                    />
                </div>
            </div>
        </form>
    );
}

export default SignFormWrapper;