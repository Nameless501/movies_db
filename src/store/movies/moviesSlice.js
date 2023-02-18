import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { handleFetch } from '../../utils/Api';
import { apiConfig } from '../../utils/configs';
import { handleMovieDataFormat } from '../../utils/utils';
import { ERROR_MOVIES_FETCH, ERROR_NO_MOVIES, SHORTFILM_DURATION } from '../../utils/constants';

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
    const response = await handleFetch(apiConfig.movies);
    return response;
})

export const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        movies: [],
        result: [],
        loading: false,
        error: '',
    },
    reducers: {
        filterMovies: (state, { payload }) => {
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
            .addCase(fetchMovies.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(fetchMovies.fulfilled, (state, action) => {
                const normalizedResult = action.payload.map(movie => handleMovieDataFormat(movie));

                state.movies = normalizedResult;
                state.result = normalizedResult;
                state.loading = false;
                state.error = '';
            })
            .addCase(fetchMovies.rejected, (state, action) => {
                state.error = ERROR_MOVIES_FETCH;
            })
    }
})

export const { filterMovies } = moviesSlice.actions;

export default moviesSlice.reducer;