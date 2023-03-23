import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { handleFetch } from '../../utils/Api';
import { dbApiConfig } from '../../utils/configs';
import { ERROR_MOVIES_FETCH } from '../../utils/constants';

export const fetchNowPlayingMovies = createAsyncThunk('nowPlayingMovies/fetchNowPlayingMovies', async () => {
    const { getUrl, options } = dbApiConfig.movies.nowPlaying;

    const response = await handleFetch(getUrl(), options);
    return response.json();
});

export const fetchMoreNowPlayingMovies = createAsyncThunk('nowPlayingMovies/fetchMoreNowPlayingMovies', async (arg, { getState }) => {
    const { nowPlaying } = getState();
    const { getUrl, options } = dbApiConfig.movies.nowPlaying;

    const response = await handleFetch(getUrl('ru-RU', nowPlaying.currentPage + 1), options);
    return response.json();
});

export const nowPlayingMoviesSlice = createSlice({
    name: 'nowPlaying',
    initialState: {
        totalPages: 1,
        currentPage: 1,
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
                const { results, page, total_pages } = action.payload;

                state.movies = results;
                state.loading = false;
                state.error = '';

                state.currentPage = page;
                state.totalPages = total_pages;
            })
            .addCase(fetchNowPlayingMovies.rejected, (state) => {
                state.error = ERROR_MOVIES_FETCH;
            })

        builder
            .addCase(fetchMoreNowPlayingMovies.fulfilled, (state, action) => {
                const { results, page, total_pages } = action.payload;

                state.movies = [...state.movies, ...results];
                state.currentPage = page;
                state.totalPages = total_pages;
            })
            .addCase(fetchMoreNowPlayingMovies.rejected, (state) => {
                state.error = ERROR_MOVIES_FETCH;
            })
    }
})

export const { } = nowPlayingMoviesSlice.actions;

export default nowPlayingMoviesSlice.reducer;