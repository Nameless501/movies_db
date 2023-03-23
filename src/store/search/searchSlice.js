import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { handleFetch } from '../../utils/Api';
import { dbApiConfig } from '../../utils/configs';
import { ERROR_MOVIES_FETCH } from '../../utils/constants';

export const findMovies = createAsyncThunk('search/findMovies', async (keyword) => {
    const { getUrl, options } = dbApiConfig.search.movies;

    const response = await handleFetch(getUrl(keyword), options);
    return response.json();
});

export const fetchMoreMovies = createAsyncThunk('search/fetchMoreMovies', async (arg, { getState }) => {
    const { search } = getState();
    const { getUrl, options } = dbApiConfig.search.movies;

    const response = await handleFetch(getUrl(search.query.keyword, 'ru-RU', search.currentPage + 1), options);
    return response.json();
});

export const findShows = createAsyncThunk('search/findShows', async (keyword) => {
    const { getUrl, options } = dbApiConfig.search.shows;

    const response = await handleFetch(getUrl(keyword), options);
    return response.json();
});

export const fetchMoreShows = createAsyncThunk('search/fetchMoreShows', async (arg, { getState }) => {
    const { search } = getState();
    const { getUrl, options } = dbApiConfig.search.shows;

    const response = await handleFetch(getUrl(search.query.keyword, 'ru-RU', search.currentPage + 1), options);
    return response.json();
});

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        query: { keyword: '', tvShows: false },
        totalPages: 1,
        currentPage: 1,
        result: [],
        loading: false,
        error: '',
    },
    reducers: {
        updateQuery: (state, action) => {
            state.query = action.payload;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(findMovies.pending, (state) => {
                state.loading = true;
            })
            .addCase(findMovies.fulfilled, (state, action) => {
                const { results, page, total_pages } = action.payload;

                state.result = results;
                state.loading = false;
                state.error = results.length > 0 ? '' : 'Ничего не нашлось';

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
                const { results, page, total_pages } = action.payload;

                state.result = results;
                state.loading = false;
                state.error = results.length > 0 ? '' : 'Ничего не нашлось';

                state.totalPages = total_pages;
                state.currentPage = page;
            })
            .addCase(findShows.rejected, (state) => {
                state.error = ERROR_MOVIES_FETCH;
            });

        builder
            .addCase(fetchMoreMovies.fulfilled, (state, action) => {
                const { results, page, total_pages } = action.payload;

                state.result = [...state.result, ...results];
                state.currentPage = page;
                state.totalPages = total_pages;
            })
            .addCase(fetchMoreMovies.rejected, (state) => {
                state.error = ERROR_MOVIES_FETCH;
            });

        builder
            .addCase(fetchMoreShows.fulfilled, (state, action) => {
                const { results, page, total_pages } = action.payload;

                state.result = [...state.result, ...results];
                state.currentPage = page;
                state.totalPages = total_pages;
            })
            .addCase(fetchMoreShows.rejected, (state) => {
                state.error = ERROR_MOVIES_FETCH;
            });
    }
})

export const { updateQuery } = searchSlice.actions

export default searchSlice.reducer;