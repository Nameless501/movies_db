import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './movies/moviesSlice';
import userMoviesReducer from './userMovies/userMoviesSlice';

export default configureStore({
    reducer: {
        movies: moviesReducer,
        userMovies: userMoviesReducer,
    },
});