import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { handleFetch } from '../../utils/Api';
import { moviesApiConfig } from '../../utils/configs';
import { ERROR_MOVIES_FETCH } from '../../utils/constants';

export const findMovies = createAsyncThunk('search/findMovies', async (keyword) => {
    const { getUrl, options } = moviesApiConfig.searchMovies;

    const response = await handleFetch(getUrl(keyword), options);
    return response.json();
});

export const findShows = createAsyncThunk('search/findShows', async (keyword) => {
    const { getUrl, options } = moviesApiConfig.searchShows;

    const response = await handleFetch(getUrl(keyword), options);
    return response.json();
});

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        totalPages: 1,
        currentPage: 1,
        result: [],
        loading: false,
        error: '',
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(findMovies.pending, (state) => {
                state.loading = true;
            })
            .addCase(findMovies.fulfilled, (state, action) => {
                const { results, page, total_pages } = action.payload;

                state.result = results;
                state.loading = false;
                state.error = '';

                state.totalPages = total_pages;
                state.currentPage = page;
            })
            .addCase(findMovies.rejected, (state) => {
                state.error = ERROR_MOVIES_FETCH;
            });

        builder
            .addCase(findShows.pending, (state) => {
                state.loading = true;
            })
            .addCase(findShows.fulfilled, (state, action) => {
                console.log(action.payload);

                const { results, page, total_pages } = action.payload;

                state.result = results;
                state.loading = false;
                state.error = '';

                state.totalPages = total_pages;
                state.currentPage = page;
            })
            .addCase(findShows.rejected, (state) => {
                state.error = ERROR_MOVIES_FETCH;
            })
    }
})

export default searchSlice.reducer;