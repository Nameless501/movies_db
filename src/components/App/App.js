import { Switch, Route } from 'react-router-dom';
import { routesConfig } from '../../utils/configs';
import { CurrentUserProvider } from '../../contexts/UserContext';
import ProtectedRoute from '../pages/ProtectedRoute/ProtectedRoute';
import MainPage from '../pages/Main/MainPage';
import TopRatedPage from '../pages/TopRated/TopRatedPage';
import SearchPage from '../pages/Search/SearchPage';
import SavedMoviesPage from '../pages/SavedMovies/SavedMoviesPage';
import ProfilePage from '../pages/Profile/ProfilePage';
import SignPage from '../pages/Sign/SignPage';
import NotFoundPage from '../pages/NotFound/NotFoundPage';
import './App.css';

function App() {
    return (
        <div className="App">
            <CurrentUserProvider>
                <Switch>
                    <Route exact path={routesConfig.main}>
                        <MainPage />
                    </Route>
                    <Route path={routesConfig.topRated}>
                        <TopRatedPage />
                    </Route>
                    <Route path={routesConfig.search}>
                        <SearchPage />
                    </Route>
                    <ProtectedRoute path={routesConfig.savedMovies}>
                        <SavedMoviesPage />
                    </ProtectedRoute>
                    <ProtectedRoute path={routesConfig.profile}>
                        <ProfilePage />
                    </ProtectedRoute>
                    <Route path={routesConfig.signIn}>
                        <SignPage />
                    </Route>
                    <Route path={routesConfig.signUp}>
                        <SignPage />
                    </Route>
                    <Route path='*' >
                        <NotFoundPage />
                    </Route>
                </Switch>
            </CurrentUserProvider>
        </div >
    );
}

export default App;
