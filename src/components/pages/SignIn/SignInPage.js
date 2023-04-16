import { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRequestToken, fetchTokenAuthentication, fetchSessionId, getTokenFromQueryAsync } from '../../../store/authorization/authorizationSlice';
import SignInForm from '../../modules/SignInForm/SignInForm';
import Header from '../../modules/Header/Header';
import Footer from '../../components/Footer/Footer';
import { routesConfig } from '../../../utils/configs';
import './SignInPage.css';

function SignInPage() {
    const { loading, error } = useSelector((state) => state.authorization);
    const { isLoggedIn } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    async function handleSignIn(inputsValue) {
        dispatch(fetchRequestToken())
            .then(() => dispatch(fetchTokenAuthentication(inputsValue)))
            .then(({ payload }) => {
                if(payload) {
                    dispatch(fetchSessionId());
                }
            })
    };

    useEffect(() => {
        async function handleSignInByQueryParam() {
            dispatch(getTokenFromQueryAsync(location.search))
                .then(({ payload }) => {
                    if(payload) {
                        dispatch(fetchSessionId())
                    }
                });
        }

        if (!isLoggedIn) {
            handleSignInByQueryParam();
        }
    }, [location, dispatch, isLoggedIn]);

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
                        Вход в аккаунт TMDB
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