import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { handleFetch } from '../../utils/Api';
import { dbApiConfig } from '../../utils/configs';
import { ERROR_MOVIES_FETCH } from '../../utils/constants';

export const fetchRecommendations = createAsyncThunk(
    'recommendations/fetchRecommendations',
    async ({ type, id }) => {
        const { getUrl, options } = dbApiConfig[type].recommendations;

        const response = await handleFetch(getUrl(id), options);
        return response.json();
    },
    {
        condition: (curr, { getState }) => {
            const { recommendations: { prev } } = getState();

            if (prev.id === curr.id && prev.type === curr.type) {
                return false;
            }
        }
    }
);

export const recommendationsSlice = createSlice({
    name: 'recommendations',
    initialState: {
        prev: {},
        recommendations: [],
        loading: 'idle',
        error: '',
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchRecommendations.pending, (state, { meta }) => {
                state.loading = 'pending';
                state.prev = meta.arg;
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