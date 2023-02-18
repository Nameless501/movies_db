import SignFormButton from '../../UI/SignFormButton/SignFormButton';
import FormLink from '../../components/FormLink/FormLink';
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
                {type === 'sign-up' &&
                    <>
                        <SignFormButton
                            text='Зарегистрироваться'
                            disabled={disabled}
                        />
                        <FormLink
                            text='Уже зарегистрированы?'
                            linkText='Войти'
                            to={routesConfig.signIn}
                        />
                    </>
                }
                {type === 'sign-in' &&
                    <>
                        <SignFormButton
                            text='Войти'
                            disabled={disabled}
                        />
                        <FormLink
                            text='Ещё не зарегистрированы?'
                            linkText='Регистрация'
                            to={routesConfig.signUp}
                        />
                    </>
                }
            </div>
        </form>
    );
}

export default SignFormWrapper;