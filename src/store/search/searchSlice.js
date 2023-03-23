import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { handleFetch } from '../../utils/Api';
import { dbApiConfig } from '../../utils/configs';
import { ERROR_MOVIES_FETCH } from '../../utils/constants';

export const fetchSearchQuery = createAsyncThunk('search/fetchSearchQuery', async ({ type, keyword }) => {
    const { getUrl, options } = dbApiConfig.search[type];

    const response = await handleFetch(getUrl(keyword), options);
    return response.json();
});

export const fetchNextPage = createAsyncThunk('search/fetchNextPage', async (arg, { getState }) => {
    const { search } = getState();
    const { getUrl, options } = dbApiConfig.search[search.query.type];

    const response = await handleFetch(getUrl(search.query.keyword, 'ru-RU', search.currentPage + 1), options);
    return response.json();
});

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        query: { keyword: '', type: 'movies', tvShows: false },
        totalPages: 1,
        currentPage: 1,
        result: [],
        loading: false,
        error: '',
    },
    reducers: {
        updateQuery: (state, action) => {
            const { keyword, tvShows } = action.payload;
            const type = tvShows ? 'shows' : 'movies';

            state.query = { keyword, type, tvShows };
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchSearchQuery.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchSearchQuery.fulfilled, (state, action) => {
                const { results, page, total_pages } = action.payload;

                state.result = results;
                state.loading = false;
                state.error = results.length > 0 ? '' : 'Ничего не нашлось';

                state.totalPages = total_pages;
                state.currentPage = page;
            })
            .addCase(fetchSearchQuery.rejected, (state) => {
                state.error = ERROR_MOVIES_FETCH;
            });

        builder
            .addCase(fetchNextPage.fulfilled, (state, action) => {
                const { results, page, total_pages } = action.payload;

                state.result = [...state.result, ...results];
                state.currentPage = page;
                state.totalPages = total_pages;
            })
            .addCase(fetchNextPage.rejected, (state) => {
                state.error = ERROR_MOVIES_FETCH;
            });
    }
})

export const { updateQuery } = searchSlice.actions

export default searchSlice.reducer;