import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSessionId } from '../../../store/user/userSlice';
import SignInForm from '../../modules/SignInForm/SignInForm';
import Header from '../../modules/Header/Header';
import Footer from '../../components/Footer/Footer';
import { routesConfig } from '../../../utils/configs';
import './SignInPage.css';

function SignInPage() {
    const { isLoggedIn, loading, error } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const history = useHistory();

    function handleSignIn(inputsValue) {
        dispatch(fetchSessionId(inputsValue));
    };

    useEffect(() => {
        if(isLoggedIn) {
            history.push(routesConfig.main);
        }
    }, [isLoggedIn, history]);

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
                        loading={loading}
                        error={error}
                    />
                </div>
            </main>
            <Footer />
        </>
    );
}

export default SignInPage;