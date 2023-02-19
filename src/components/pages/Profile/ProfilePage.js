import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useUserContext } from '../../../contexts/UserContext';
import useDataFetch from '../../../hooks/useDataFetch';
import { routesConfig, profileErrorsConfig, apiConfig } from '../../../utils/configs';
import Header from '../../modules/Header/Header';
import ProfileForm from '../../modules/ProfileForm/ProfileForm';
import InfoTooltip from '../../components/InfoTooltip/InfoTooltip';
import './ProfilePage.css';

function ProfilePage() {
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [modalIsOpen, setModalState] = useState(false);

    const { userData, setCurrentUser, removeCurrentUser } = useUserContext();
    const { handleFetch } = useDataFetch();

    const history = useHistory();

    function handleSignOut() {
        setIsLoading(true);

        handleFetch(apiConfig.signOut)
            .then(() => removeCurrentUser())
            .then(() => {
                localStorage.clear();
                sessionStorage.clear();
            })
            .then(() => history.push(routesConfig.main))
            .catch(err => setError(profileErrorsConfig[err]))
            .finally(() => setIsLoading(false));
    }

    function handleDataChange(inputsValues) {
        setIsLoading(true);

        handleFetch(apiConfig.userData, inputsValues)
            .then(setCurrentUser)
            .then(() => setModalState(true))
            .catch(err => setError(profileErrorsConfig[err]))
            .finally(() => setIsLoading(false));
    }

    function handleClosePopup() {
        setModalState(false);
    };

    return (
        <>
            <div className='profile-page' >
                <Header />
                <main className='profile-page__content' >
                    <h2 className='profile-page__title' >
                        {`Привет, ${userData?.name || ''}!`}
                    </h2>
                    <ProfileForm
                        handleSignOut={handleSignOut}
                        handleDataChange={handleDataChange}
                        fetchError={error}
                        isLoading={isLoading}
                    />
                </main>
            </div>
            {modalIsOpen &&
                    <InfoTooltip
                        handleClose={handleClosePopup}
                    />
            }
        </>
    );
}

export default ProfilePage;