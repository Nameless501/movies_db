import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { handleFetch } from '../../utils/Api';
import { dbApiConfig } from '../../utils/configs';
import { ERROR_MOVIES_FETCH } from '../../utils/constants';

export const fetchRecommendations = createAsyncThunk('recommendations/fetchRecommendations', async ({ type, id }) => {
    const { getUrl, options } = dbApiConfig[type].recommendations;

    const response = await handleFetch(getUrl(id), options);
    return response.json();
});

export const recommendationsSlice = createSlice({
    name: 'recommendations',
    initialState: {
        recommendations: [],
        loading: 'idle',
        error: '',
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchRecommendations.pending, (state) => {
                state.loading = 'pending';
            })
            .addCase(fetchRecommendations.fulfilled, (state, action) => {
                const { results } = action.payload;

                state.recommendations = results;
                state.loading = 'fulfilled';
                state.error = '';
            })
            .addCase(fetchRecommendations.rejected, (state) => {
                state.error = ERROR_MOVIES_FETCH;
                state.loading = 'rejected';
            })
    }
})

export default recommendationsSlice.reducer;