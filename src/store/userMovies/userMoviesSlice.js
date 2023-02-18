import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { handleFetch, handleFetchById } from '../../utils/Api';
import { apiConfig } from '../../utils/configs';
import { ERROR_MOVIES_FETCH, ERROR_NO_MOVIES, SHORTFILM_DURATION } from '../../utils/constants';

export const fetchUserMovies = createAsyncThunk('userMovies/fetchUserMovies', async () => {
    const response = await handleFetch(apiConfig.userMovies);
    return response;
})

export const saveUserMovie = createAsyncThunk('userMovies/saveUserMovie', async (movieData) => {
    const response = await handleFetch(apiConfig.saveMovie, movieData);
    return response;
})

export const deleteUserMovie = createAsyncThunk('userMovies/deleteUserMovie', async (id) => {
    const response = await handleFetchById(apiConfig.deleteMovie, id);
    return response;
})

export const userMoviesSlice = createSlice({
    name: 'userMovies',
    initialState: {
        movies: [],
        result: [],
        loading: false,
        error: '',
    },
    reducers: {
        filterUserMovies: (state, { payload }) => {
            const { keyword, shortfilms } = payload;

            let filteredMovies = keyword ?
                state.movies.filter(({ nameRU }) => nameRU.toLowerCase().includes(keyword))
                :
                state.movies;

            if (!shortfilms) {
                filteredMovies = filteredMovies.filter(({ duration }) => duration >= SHORTFILM_DURATION);
            }

            state.error = filteredMovies.length === 0 ? ERROR_NO_MOVIES : '';
            state.result = filteredMovies;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchUserMovies.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(fetchUserMovies.fulfilled, (state, { payload }) => {
                state.movies = payload;
                state.result = payload;
                state.loading = false;
                state.error = '';
            })
            .addCase(fetchUserMovies.rejected, (state, action) => {
                state.error = ERROR_MOVIES_FETCH;
            })

        builder
            .addCase(saveUserMovie.fulfilled, (state, { payload }) => {
                state.movies = [...state.movies, payload];
            })
            .addCase(saveUserMovie.rejected, (state, action) => {
                console.log('Не удалось сохранить фильм');
            })

        builder
            .addCase(deleteUserMovie.fulfilled, (state, { payload }) => {
                state.movies = state.movies.filter(movie => movie._id !== payload._id);
                state.result = state.result.filter(movie => movie._id !== payload._id);
            })
            .addCase(deleteUserMovie.rejected, (state, action) => {
                console.log('Не удалось удалить фильм');
            })

    }
})

export const { filterUserMovies } = userMoviesSlice.actions;

export default userMoviesSlice.reducer;