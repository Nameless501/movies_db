import { configureStore } from '@reduxjs/toolkit';
import topRatedReducer from './topRatedMovies/topRatedMoviesSlice';
import userMoviesReducer from './userMovies/userMoviesSlice';
import nowPlayingMoviesReducer from './nowPlayingMovies/nowPlayingMoviesSlice';
import movieInfoReducer from './movieInfo/movieInfoSlice';
import actorsReducer from './actors/actorsSlice';
import similarMoviesReducer from './similarMovies/similarMoviesSlice';

export default configureStore({
    reducer: {
        topRated: topRatedReducer,
        actors: actorsReducer,
        userMovies: userMoviesReducer,
        nowPlaying: nowPlayingMoviesReducer,
        movieInfo: movieInfoReducer,
        similarMovies: similarMoviesReducer,
    },
});