import { useEffect } from 'react';
import useFormStateAndValidation from '../../../hooks/useFormStateAndValidation';
import SignFormWrapper from '../../components/SignFormWrapper/SignFormWrapper';
import FormInput from '../../components/FormInput/FormInput';

function SignUpForm({ handleSubmit, isLoading, error }) {
    const { inputsValues, errorMessages, formIsValid, handleInputChange, resetFormValues } = useFormStateAndValidation();

    function onSubmit(evt) {
        evt.preventDefault();
        handleSubmit(inputsValues);
    }

    useEffect(() => {
        return () => {
            resetFormValues();
        }
    }, [resetFormValues]);

    return (
        <SignFormWrapper
            type='sign-up'
            onSubmit={onSubmit}
            disabled={!formIsValid || isLoading}
            error={error}
        >
            <FormInput
                label='Имя'
                type='text'
                name='name'
                required={true}
                place='form'
                errorMessage={errorMessages.name}
                value={inputsValues.name}
                handleChange={(evt) => handleInputChange(evt, { customValidation: true })}
            />
            <FormInput
                label='E-mail'
                type='text'
                name='email'
                required={true}
                place='form'
                errorMessage={errorMessages.email}
                value={inputsValues.email}
                handleChange={(evt) => handleInputChange(evt, { customValidation: true })}
            />
            <FormInput
                label='Пароль'
                type='password'
                name='password'
                required={true}
                place='form'
                errorMessage={errorMessages.password}
                value={inputsValues.password}
                handleChange={handleInputChange}
            />
        </SignFormWrapper>
    );
}

export default SignUpForm;