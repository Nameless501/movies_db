import { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useUserContext } from '../../../contexts/UserContext';
import useDataFetch from '../../../hooks/useDataFetch';
import SignPageTitle from '../../components/SignPageTitle/SignPageTitle';
import SignInForm from '../../modules/SignInForm/SignInForm';
import SignUpForm from '../../modules/SignUpForm/SignUpForm';
import SignPageWrapper from '../../components/SignPageWrapper/SignPageWrapper';
import { routesConfig, signInErrorsConfig, signUpErrorsConfig, apiConfig } from '../../../utils/configs';

function SignPage() {
    const [error, setError] = useState({ signIn: '', signUp: '' });
    const [isLoading, setIsLoading] = useState(false);

    const location = useLocation();
    const history = useHistory();

    const { setCurrentUser, userIsLogged } = useUserContext();
    const { handleFetch } = useDataFetch();

    // sign handlers

    function handleSignIn(inputsValues) {
        setIsLoading(true);

        handleFetch(apiConfig.signIn, inputsValues)
            .then(setCurrentUser)
            .catch(err => {
                setError((current) => ({
                    ...current,
                    signIn: signInErrorsConfig[err],
                }));

                if (location.pathname !== routesConfig.signIn) {
                    history.push(routesConfig.signIn);
                }

                setIsLoading(false)
            });
    }

    function handleSignUp(inputsValues) {
        setIsLoading(true);

        handleFetch(apiConfig.signUp, inputsValues)
            .then(() => handleSignIn(inputsValues))
            .catch(err => {
                setError((current) => ({
                    ...current,
                    signUp: signUpErrorsConfig[err],
                }));

                setIsLoading(false);
            });
    }

    // redirect authorized user to movies page

    useEffect(() => {
        if (userIsLogged) {
            history.push(routesConfig.topRated);
        }
    }, [userIsLogged, history]);

    return (
        <SignPageWrapper>
            {location.pathname === routesConfig.signUp &&
                <>
                    <SignPageTitle text='Добро пожаловать!' />
                    <SignUpForm
                        handleSubmit={handleSignUp}
                        isLoading={isLoading}
                        error={error.signUp}
                    />
                </>
            }
            {location.pathname === routesConfig.signIn &&
                <>
                    <SignPageTitle text='Рады видеть!' />
                    <SignInForm
                        handleSubmit={handleSignIn}
                        isLoading={isLoading}
                        error={error.signIn}
                    />
                </>
            }
        </SignPageWrapper>
    );
}

export default SignPage;