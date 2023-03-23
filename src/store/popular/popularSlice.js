import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { handleFetch } from '../../utils/Api';
import { dbApiConfig } from '../../utils/configs';
import { ERROR_MOVIES_FETCH } from '../../utils/constants';

export const fetchPopular = createAsyncThunk('popular/fetchPopular', async (type) => {
    const { getUrl, options } = dbApiConfig[type].popular;

    const response = await handleFetch(getUrl(), options);
    return response.json();
});

export const fetchMorePopular = createAsyncThunk('popular/fetchMorePopular', async (type, { getState }) => {
    const { popular } = getState();
    const { getUrl, options } = dbApiConfig[type].popular;

    const response = await handleFetch(getUrl('ru-RU', popular.currentPage + 1), options);
    return response.json();
});

export const popularSlice = createSlice({
    name: 'popular',
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
            .addCase(fetchPopular.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchPopular.fulfilled, (state, action) => {
                const { results, page, total_pages } = action.payload;

                state.results = results;
                state.loading = false;
                state.error = '';

                state.currentPage = page;
                state.totalPages = total_pages;
            })
            .addCase(fetchPopular.rejected, (state) => {
                state.error = ERROR_MOVIES_FETCH;
            });

        builder
            .addCase(fetchMorePopular.fulfilled, (state, action) => {
                const { results, page, total_pages } = action.payload;

                state.results = [...state.results, ...results];
                state.currentPage = page;
                state.totalPages = total_pages;
            })
            .addCase(fetchMorePopular.rejected, (state) => {
                state.error = ERROR_MOVIES_FETCH;
            });
    }
})

export default popularSlice.reducer;