import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './movies/moviesSlice';
import userMoviesReducer from './userMovies/userMoviesSlice';
import nowPlayingMoviesReducer from './nowPlayingMovies/nowPlayingMoviesSlice';

export default configureStore({
    reducer: {
        movies: moviesReducer,
        userMovies: userMoviesReducer,
        nowPlaying: nowPlayingMoviesReducer,
    },
});