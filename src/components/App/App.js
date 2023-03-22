import { Switch, Route } from 'react-router-dom';
import { routesConfig } from '../../utils/configs';
import { CurrentUserProvider } from '../../contexts/UserContext';
import { usePortalContext } from '../../contexts/PortalContext';
import MainPage from '../pages/Main/MainPage';
import TopRatedPage from '../pages/TopRated/TopRatedPage';
import NowPlayingPage from '../pages/NowPlaying/NowPlayingPage';
import MovieInfoPage from '../pages/MovieInfo/MovieInfoPage';
import SearchPage from '../pages/Search/SearchPage';
import NotFoundPage from '../pages/NotFound/NotFoundPage';
import Portal from '../components/Portal/Portal';
import TrailerPopup from '../modules/TrailerPopup/TrailerPopup';
import SharePopup from '../modules/SharePopup/SharePopup';
import './App.css';

function App() {
    const { trailerPopupIsOpen, sharePopupIsOpen } = usePortalContext();

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
                    <Route path={routesConfig.nowPlaying}>
                        <NowPlayingPage />
                    </Route>
                    <Route path={routesConfig.movieInfo + '/:id'}>
                        <MovieInfoPage />
                    </Route>
                    <Route path={routesConfig.search}>
                        <SearchPage />
                    </Route>
                    <Route path='*' >
                        <NotFoundPage />
                    </Route>
                </Switch>
                <Portal>
                    {
                        trailerPopupIsOpen && <TrailerPopup />
                    }
                    {
                        sharePopupIsOpen && <SharePopup />
                    }
                </Portal>
            </CurrentUserProvider>
        </div >
    );
}

export default App;
