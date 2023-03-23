import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { handleFetch } from '../../utils/Api';
import { dbApiConfig } from '../../utils/configs';
import { ERROR_MOVIES_FETCH } from '../../utils/constants';

export const fetchMovieInfo = createAsyncThunk('movieInfo/fetchMovieInfo', async (id) => {
    const { getUrl, options } = dbApiConfig.movies.info;

    const response = await handleFetch(getUrl(id), options);
    return response.json();
});

export const movieInfoSlice = createSlice({
    name: 'movies',
    initialState: {
        movieData: {},
        loading: false,
        error: '',
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchMovieInfo.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchMovieInfo.fulfilled, (state, action) => {
                state.movieData = action.payload;
                state.loading = false;
                state.error = '';
            })
            .addCase(fetchMovieInfo.rejected, (state) => {
                state.error = ERROR_MOVIES_FETCH;
            })
    }
})

export const { filterMovies } = movieInfoSlice.actions;

export default movieInfoSlice.reducer;