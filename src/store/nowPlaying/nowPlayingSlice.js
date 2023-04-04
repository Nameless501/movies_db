import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { handleFetch } from '../../utils/Api';
import { dbApiConfig } from '../../utils/configs';
import { ERROR_MOVIES_FETCH } from '../../utils/constants';

export const fetchNowPlaying = createAsyncThunk('nowPlaying/fetchNowPlaying', async () => {
    const { getUrl, options } = dbApiConfig.movies.nowPlaying;

    const response = await handleFetch(getUrl(), options);
    return response.json();
});

export const fetchMoreNowPlaying = createAsyncThunk('nowPlaying/fetchMoreNowPlayingMovies', async (arg, { getState }) => {
    const { nowPlaying } = getState();
    const { getUrl, options } = dbApiConfig.movies.nowPlaying;

    const response = await handleFetch(getUrl('ru-RU', nowPlaying.currentPage + 1), options);
    return response.json();
});

export const nowPlayingSlice = createSlice({
    name: 'nowPlaying',
    initialState: {
        totalPages: 1,
        currentPage: 1,
        results: [],
        loading: 'idle',
        error: '',
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchNowPlaying.pending, (state) => {
                state.loading = 'pending';
            })
            .addCase(fetchNowPlaying.fulfilled, (state, action) => {
                const { results, page, total_pages } = action.payload;

                state.results = results;
                state.loading = 'fulfilled';
                state.error = '';

                state.currentPage = page;
                state.totalPages = total_pages;
            })
            .addCase(fetchNowPlaying.rejected, (state) => {
                state.error = ERROR_MOVIES_FETCH;
                state.loading = 'rejected';
            })

        builder
            .addCase(fetchMoreNowPlaying.fulfilled, (state, action) => {
                const { results, page, total_pages } = action.payload;

                state.results = [...state.results, ...results];
                state.currentPage = page;
                state.totalPages = total_pages;
            })
            .addCase(fetchMoreNowPlaying.rejected, (state) => {
                state.error = ERROR_MOVIES_FETCH;
            })
    }
})

export default nowPlayingSlice.reducer;