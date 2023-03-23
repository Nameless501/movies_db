import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { handleFetch } from '../../utils/Api';
import { dbApiConfig } from '../../utils/configs';
import { ERROR_MOVIES_FETCH } from '../../utils/constants';

export const fetchLatest = createAsyncThunk('latest/fetchLatest', async (type) => {
    const { getUrl, options } = dbApiConfig[type].latest;

    const response = await handleFetch(getUrl(), options);
    return response.json();
});

export const fetchMoreLatest = createAsyncThunk('latest/fetchMoreLatest', async (type, { getState }) => {
    const { latest } = getState();
    const { getUrl, options } = dbApiConfig[type].latest;

    const response = await handleFetch(getUrl('ru-RU', latest.currentPage + 1), options);
    return response.json();
});

export const latestSlice = createSlice({
    name: 'latest',
    initialState: {
        totalPages: 1,
        currentPage: 1,
        results: [],
        loading: false,
        error: '',
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchLatest.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchLatest.fulfilled, (state, action) => {
                const { results, page, total_pages } = action.payload;

                state.results = results;
                state.loading = false;
                state.error = '';

                state.currentPage = page;
                state.totalPages = total_pages;
            })
            .addCase(fetchLatest.rejected, (state) => {
                state.error = ERROR_MOVIES_FETCH;
            });

        builder
            .addCase(fetchMoreLatest.fulfilled, (state, action) => {
                const { results, page, total_pages } = action.payload;

                state.results = [...state.results, ...results];
                state.currentPage = page;
                state.totalPages = total_pages;
            })
            .addCase(fetchMoreLatest.rejected, (state) => {
                state.error = ERROR_MOVIES_FETCH;
            });
    }
})

export default latestSlice.reducer;