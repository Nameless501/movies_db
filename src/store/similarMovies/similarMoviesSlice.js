import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { handleFetch } from '../../utils/Api';
import { moviesApiConfig } from '../../utils/configs';
import { ERROR_MOVIES_FETCH } from '../../utils/constants';
import { MOVIES_API_KEY } from '../../utils/constants';

export const fetchSimilarMovies = createAsyncThunk('similarMovies/fetchSimilarMovies', async (id) => {
    const { url, options } = moviesApiConfig.movieInfo;

    const response = await handleFetch(url + id + '/recommendations' + MOVIES_API_KEY + '&language=ru-RU', options);
    return response.json();
});

export const similarMoviesSlice = createSlice({
    name: 'similarMovies',
    initialState: {
        movies: [],
        loading: false,
        error: '',
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchSimilarMovies.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchSimilarMovies.fulfilled, (state, action) => {
                const { results } = action.payload;

                state.movies = results;
                state.loading = false;
                state.error = '';
            })
            .addCase(fetchSimilarMovies.rejected, (state) => {
                state.error = ERROR_MOVIES_FETCH;
            })
    }
})

export const { filterMovies } = similarMoviesSlice.actions;

export default similarMoviesSlice.reducer;