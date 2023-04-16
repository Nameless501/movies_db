import { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { routesConfig } from '../../utils/configs';
import { usePortalContext } from '../../contexts/PortalContext';
import { fetchProfileData } from '../../store/user/userSlice';
import { getSessionIdFromStorage } from '../../store/authorization/authorizationSlice';
import useResize from '../../hooks/useResize';
import usePageScroll from '../../hooks/usePageScroll';
import MainPage from '../pages/Main/MainPage';
import InfoPage from '../pages/InfoPage/InfoPage';
import TopRatedPage from '../pages/TopRated/TopRatedPage';
import NowPlayingPage from '../pages/NowPlaying/NowPlayingPage';
import PopularPage from '../pages/Popular/PopularPage';
import SearchPage from '../pages/Search/SearchPage';
import SignInPage from '../pages/SignIn/SignInPage';
import NotFoundPage from '../pages/NotFound/NotFoundPage';
import Portal from '../components/Portal/Portal';
import TrailerPopup from '../modules/TrailerPopup/TrailerPopup';
import SharePopup from '../modules/SharePopup/SharePopup';
import ConstructionSitePopup from '../modules/ConstructionSitePopup/ConstructionSitePopup';
import SideBar from '../modules/SideBar/SideBar';
import './App.css';

function App() {
    const { session_id } = useSelector((state) => state.authorization);
    const { trailerPopupIsOpen, sharePopupIsOpen, constructionPopupIsOpen } = usePortalContext();
    const { isTablet, isMobile } = useResize();
    const dispatch = useDispatch();
    usePageScroll();

    useEffect(() => {
        if (session_id) {
            dispatch(fetchProfileData());
        }
    }, [dispatch, session_id]);

    useEffect(() => {
        dispatch(getSessionIdFromStorage());
    }, [dispatch]);

    return (
        <div className="App">
            <Switch>

                {/* Main page */}

                <Route exact path={routesConfig.main}>
                    <MainPage />
                </Route>

                {/* Top rated pages */}

                <Route path={routesConfig.movies.topRated}>
                    <TopRatedPage
                        type='movies'
                        title='Фильмы с высоким рейтингом'
                    />
                </Route>
                <Route path={routesConfig.shows.topRated}>
                    <TopRatedPage
                        type='shows'
                        title='Сериалы с высоким рейтингом'
                    />
                </Route>

                {/* Popular pages */}

                <Route path={routesConfig.movies.popular}>
                    <PopularPage
                        type='movies'
                        title='Популярные фильмы'
                    />
                </Route>
                <Route path={routesConfig.shows.popular}>
                    <PopularPage
                        type='shows'
                        title='Популярные сериалы'
                    />
                </Route>

                {/* Now playing page */}

                <Route path={routesConfig.movies.nowPlaying}>
                    <NowPlayingPage />
                </Route>

                {/* Info pages */}

                <Route path={routesConfig.movies.info + '/:id'}>
                    <InfoPage type='movies' />
                </Route>
                <Route path={routesConfig.shows.info + '/:id'}>
                    <InfoPage type='shows' />
                </Route>

                {/* Search page */}

                <Route path={routesConfig.search}>
                    <SearchPage />
                </Route>

                {/* Sign in page */}

                <Route path={routesConfig.signIn}>
                    <SignInPage />
                </Route>

                {/* Not found pages */}

                <Route path='*' >
                    <NotFoundPage />
                </Route>

            </Switch>

            {/* Popups */}

            <Portal>
                { trailerPopupIsOpen && <TrailerPopup /> }
                { sharePopupIsOpen && <SharePopup /> }
                { constructionPopupIsOpen && <ConstructionSitePopup /> }
                { (isTablet || isMobile) && <SideBar /> }
            </Portal>
        </div >
    );
}

export default App;
