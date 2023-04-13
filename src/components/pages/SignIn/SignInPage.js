import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useDataFetch from '../../../hooks/useDataFetch';
import SignInForm from '../../modules/SignInForm/SignInForm';
import Header from '../../modules/Header/Header';
import Footer from '../../components/Footer/Footer';
import { routesConfig, signInErrorsConfig, apiConfig } from '../../../utils/configs';
import './SignInPage.css';

function SignInPage() {
    // const history = useHistory();

    // sign handlers

    function handleSignIn() {
    }

    // redirect authorized user to movies page

    // useEffect(() => {
    //     if (userIsLogged) {
    //         history.push(routesConfig.topRated);
    //     }
    // }, [userIsLogged, history]);

    return (
        <>
            <Header />
            <main className='sign-page'>
                <div className='sign-page__wrapper' >
                    <h2 className='sign-page__title' >
                        Placeholder
                    </h2>
                    <SignInForm
                        handleSubmit={handleSignIn}
                        isLoading={false}
                        error={''}
                    />
                </div>
            </main>
            <Footer />
        </>
    );
}

export default SignInPage;