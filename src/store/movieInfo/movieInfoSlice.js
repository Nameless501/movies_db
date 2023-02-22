import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { handleFetch } from '../../utils/Api';
import { moviesApiConfig } from '../../utils/configs';
import { ERROR_MOVIES_FETCH } from '../../utils/constants';
import { MOVIES_API_KEY } from '../../utils/constants';

export const fetchMovieInfo = createAsyncThunk('movieInfo/fetchMovieInfo', async (id) => {
    const { url, options } = moviesApiConfig.movieInfo;

    const response = await handleFetch(url + id + MOVIES_API_KEY + '&language=ru-RU', options);
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