import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { handleFetch } from '../../utils/Api';
import { dbApiConfig } from '../../utils/configs';
import { ERROR_MOVIES_FETCH } from '../../utils/constants';

export const fetchSearchQuery = createAsyncThunk(
    'search/fetchSearchQuery',
    async ({ type, keyword }) => {
        const { getUrl, options } = dbApiConfig.search[type];

        const response = await handleFetch(getUrl(keyword), options);
        return response.json();
    },
    {
        condition: (curr, { getState }) => {
            const { search: { prev } } = getState();

            if (prev.keyword === curr.keyword && prev.type === curr.type) {
                return false;
            }
        }
    }
);

export const fetchNextPage = createAsyncThunk('search/fetchNextPage', async (arg, { getState }) => {
    const { search } = getState();
    const { getUrl, options } = dbApiConfig.search[search.prev.type];

    const response = await handleFetch(getUrl(search.prev.keyword, 'ru-RU', search.currentPage + 1), options);
    return response.json();
});

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        prev: { keyword: '', type: 'movies' },
        totalPages: 1,
        currentPage: 1,
        result: [],
        loading: 'idle',
        error: '',
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchSearchQuery.pending, (state, { meta }) => {
                state.loading = 'pending';
                state.prev = meta.arg;
            })
            .addCase(fetchSearchQuery.fulfilled, (state, action) => {
                const { results, page, total_pages } = action.payload;

                state.result = results;
                state.loading = 'fulfilled';
                state.error = results.length > 0 ? '' : 'Ничего не нашлось';

                state.totalPages = total_pages;
                state.currentPage = page;
            })
            .addCase(fetchSearchQuery.rejected, (state) => {
                state.error = ERROR_MOVIES_FETCH;
                state.loading = 'rejected';
            });

        builder
            .addCase(fetchNextPage.fulfilled, (state, action) => {
                const { results, page, total_pages } = action.payload;

                state.result = [...state.result, ...results];
                state.currentPage = page;
                state.totalPages = total_pages;
                state.loading = 'fulfilled';
            })
            .addCase(fetchNextPage.rejected, (state) => {
                state.error = ERROR_MOVIES_FETCH;
                state.loading = 'rejected';
            });
    }
});

export default searchSlice.reducer;