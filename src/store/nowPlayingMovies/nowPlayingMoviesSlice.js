import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { handleFetch } from '../../utils/Api';
import { moviesApiConfig } from '../../utils/configs';
import { ERROR_MOVIES_FETCH } from '../../utils/constants';

export const fetchNowPlayingMovies = createAsyncThunk('nowPlayingMovies/fetchNowPlayingMovies', async () => {
    const { url, options } = moviesApiConfig.nowPlaying;

    const response = await handleFetch(url + '&language=ru-RU&page=1', options);
    return response.json();
});

export const nowPlayingMoviesSlice = createSlice({
    name: 'nowPlaying',
    initialState: {
        movies: [],
        loading: false,
        error: '',
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchNowPlayingMovies.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchNowPlayingMovies.fulfilled, (state, action) => {
                const { results } = action.payload;

                state.movies = results;
                state.loading = false;
                state.error = '';
                state.page += 1;
            })
            .addCase(fetchNowPlayingMovies.rejected, (state) => {
                state.error = ERROR_MOVIES_FETCH;
            })
    }
})

export const {  } = nowPlayingMoviesSlice.actions;

export default nowPlayingMoviesSlice.reducer;