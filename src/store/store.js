import { configureStore } from '@reduxjs/toolkit';
import topRatedReducer from './topRatedMovies/topRatedMoviesSlice';
import userMoviesReducer from './userMovies/userMoviesSlice';
import nowPlayingMoviesReducer from './nowPlayingMovies/nowPlayingMoviesSlice';
import movieInfoReducer from './movieInfo/movieInfoSlice';
import actorsReducer from './actors/actorsSlice';
import similarMoviesReducer from './similarMovies/similarMoviesSlice';
import reviewsReducer from './reviews/reviewsSlice';
import searchReducer from './search/searchSlice';
import trailerReducer from './trailer/trailerSlice';

export default configureStore({
    reducer: {
        topRated: topRatedReducer,
        actors: actorsReducer,
        reviews: reviewsReducer,
        search: searchReducer,
        trailer: trailerReducer,
        userMovies: userMoviesReducer,
        nowPlaying: nowPlayingMoviesReducer,
        movieInfo: movieInfoReducer,
        similarMovies: similarMoviesReducer,
    },
});