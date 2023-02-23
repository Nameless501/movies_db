import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { handleFetch } from '../../utils/Api';
import { moviesApiConfig } from '../../utils/configs';
import { MOVIES_API_KEY } from '../../utils/constants';
import { ERROR_MOVIES_FETCH } from '../../utils/constants';

export const fetchReviews = createAsyncThunk('reviews/fetchReviews', async (id) => {
    const { url, options } = moviesApiConfig.movieInfo;

    const response = await handleFetch(url + id + '/reviews' + MOVIES_API_KEY, options);
    return response.json();
});

export const reviewsSlice = createSlice({
    name: 'reviews',
    initialState: {
        reviews: [],
        loading: false,
        error: '',
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchReviews.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchReviews.fulfilled, (state, action) => {
                const { results } = action.payload;

                state.reviews = results;
                state.loading = false;
                state.error = '';
            })
            .addCase(fetchReviews.rejected, (state) => {
                state.error = ERROR_MOVIES_FETCH;
            })
    }
})

export default reviewsSlice.reducer;