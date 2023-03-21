import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { handleFetch } from '../../utils/Api';
import { moviesApiConfig } from '../../utils/configs';
import { ERROR_MOVIES_FETCH } from '../../utils/constants';

export const findMovies = createAsyncThunk('search/findMovies', async (keyword) => {
    const { getUrl, options } = moviesApiConfig.search;

    const response = await handleFetch(getUrl(keyword), options);
    return response.json();
});

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
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
                const { results } = action.payload;

                state.result = results;
                state.loading = false;
                state.error = '';
            })
            .addCase(findMovies.rejected, (state) => {
                state.error = ERROR_MOVIES_FETCH;
            })
    }
})

export default searchSlice.reducer;