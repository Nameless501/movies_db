import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { handleFetch } from '../../utils/Api';
import { dbApiConfig } from '../../utils/configs';
import { ERROR_MOVIES_FETCH } from '../../utils/constants';

export const fetchTopRated = createAsyncThunk('topRated/fetchTopRated', async (type) => {
    const { getUrl, options } = dbApiConfig[type].topRated;
    const response = await handleFetch(getUrl(), options);
    return response.json();
});

export const fetchMoreTopRated = createAsyncThunk('topRated/fetchMoreTopRated', async (type, { getState }) => {
    const { topRated } = getState();
    const { getUrl, options } = dbApiConfig[type].topRated;

    const response = await handleFetch(getUrl('ru-RU', topRated.currentPage + 1), options);
    return response.json();
});

export const topRatedSlice = createSlice({
    name: 'topRated',
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
            .addCase(fetchTopRated.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchTopRated.fulfilled, (state, action) => {
                const { results, page, total_pages } = action.payload;

                state.results = results;
                state.loading = false;
                state.error = '';

                state.currentPage = page;
                state.totalPages = total_pages;
            })
            .addCase(fetchTopRated.rejected, (state) => {
                state.error = ERROR_MOVIES_FETCH;
            })

        builder
            .addCase(fetchMoreTopRated.fulfilled, (state, action) => {
                const { results, page, total_pages } = action.payload;

                state.results = [...state.results, ...results];
                state.currentPage = page;
                state.totalPages = total_pages;
            })
            .addCase(fetchMoreTopRated.rejected, (state) => {
                state.error = ERROR_MOVIES_FETCH;
            })
    }
})

export default topRatedSlice.reducer;