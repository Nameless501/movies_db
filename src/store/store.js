import { configureStore } from '@reduxjs/toolkit';
import topRatedReducer from './topRated/topRatedSlice';
import nowPlayingReducer from './nowPlaying/nowPlayingSlice';
import infoReducer from './info/infoSlice';
import actorsReducer from './actors/actorsSlice';
import recommendationsReducer from './recommendations/recommendationsSlice';
import reviewsReducer from './reviews/reviewsSlice';
import searchReducer from './search/searchSlice';
import trailerReducer from './trailer/trailerSlice';
import popularReducer from './popular/popularSlice';

export default configureStore({
    reducer: {
        actors: actorsReducer,
        reviews: reviewsReducer,
        search: searchReducer,
        trailer: trailerReducer,
        info: infoReducer,
        popular: popularReducer,
        recommendations: recommendationsReducer,
        nowPlaying: nowPlayingReducer,
        topRated: topRatedReducer,
    },
});