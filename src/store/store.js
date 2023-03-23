import { configureStore } from '@reduxjs/toolkit';
import topRatedReducer from './topRatedMovies/topRatedMoviesSlice';
import nowPlayingMoviesReducer from './nowPlayingMovies/nowPlayingMoviesSlice';
import infoReducer from './info/infoSlice';
import actorsReducer from './actors/actorsSlice';
import recommendationsReducer from './recommendations/recommendationsSlice';
import reviewsReducer from './reviews/reviewsSlice';
import searchReducer from './search/searchSlice';
import trailerReducer from './trailer/trailerSlice';

export default configureStore({
    reducer: {
        actors: actorsReducer,
        reviews: reviewsReducer,
        search: searchReducer,
        trailer: trailerReducer,
        info: infoReducer,
        recommendations: recommendationsReducer,
        nowPlaying: nowPlayingMoviesReducer,
        topRated: topRatedReducer,
    },
});