import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { handleFetch } from '../../utils/Api';
import { dbApiConfig } from '../../utils/configs';
import { ERROR_MOVIES_FETCH } from '../../utils/constants';

export const fetchSimilarMovies = createAsyncThunk('similarMovies/fetchSimilarMovies', async (id) => {
    const { getUrl, options } = dbApiConfig.movies.recommendations;

    const response = await handleFetch(getUrl(id), options);
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