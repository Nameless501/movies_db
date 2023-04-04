import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { handleFetch } from '../../utils/Api';
import { dbApiConfig } from '../../utils/configs';
import { ERROR_MOVIES_FETCH } from '../../utils/constants';

export const fetchTopRated = createAsyncThunk('topRated/fetchTopRated', async (type) => {
    const { getUrl, options } = dbApiConfig[type].topRated;
    const response = await handleFetch(getUrl(), options);
    const data = await response.json();

    return data;
});

export const fetchMoreTopRated = createAsyncThunk('topRated/fetchMoreTopRated', async (type, { getState }) => {
    const { topRated } = getState();
    const { getUrl, options } = dbApiConfig[type].topRated;

    const response = await handleFetch(getUrl('ru-RU', topRated[type].currentPage + 1), options);
    const data = await response.json();

    return data;
});

export const topRatedSlice = createSlice({
    name: 'topRated',
    initialState: {
        movies: {
            totalPages: 1,
            currentPage: 1,
            results: [],
            loading: 'idle',
            error: '',
        },
        shows: {
            totalPages: 1,
            currentPage: 1,
            results: [],
            loading: 'idle',
            error: '',
        },
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchTopRated.pending, (state, { meta }) => {
                const type = meta.arg;
                state[type].loading = 'pending';
            })
            .addCase(fetchTopRated.fulfilled, (state, { payload, meta }) => {
                const { results, page, total_pages } = payload;
                const type = meta.arg;
                const current = state[type];

                current.results = results;
                current.loading = 'fulfilled';
                current.error = '';

                current.currentPage = page;
                current.totalPages = total_pages;
            })
            .addCase(fetchTopRated.rejected, (state, { meta }) => {
                const type = meta.arg;

                state[type].error = ERROR_MOVIES_FETCH;
                state[type].loading = 'rejected';
            });

        builder
            .addCase(fetchMoreTopRated.pending, (state, { meta }) => {
                const type = meta.arg;
                state[type].loading = 'pending';
            })
            .addCase(fetchMoreTopRated.fulfilled, (state, { payload, meta }) => {
                const { results, page, total_pages } = payload;
                const type = meta.arg;
                const current = state[type];

                current.results = [...current.results, ...results];
                current.currentPage = page;
                current.totalPages = total_pages;
                current.loading = 'fulfilled';
            })
            .addCase(fetchMoreTopRated.rejected, (state, { meta }) => {
                const type = meta.arg;

                state[type].error = ERROR_MOVIES_FETCH;
                state[type].loading = 'rejected';
            });
    }
})

export default topRatedSlice.reducer;