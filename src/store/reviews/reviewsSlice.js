import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { handleFetch } from '../../utils/Api';
import { dbApiConfig } from '../../utils/configs';
import { ERROR_MOVIES_FETCH } from '../../utils/constants';

export const fetchReviews = createAsyncThunk('reviews/fetchReviews', async (id) => {
    const { getUrl, options } = dbApiConfig.movies.reviews;

    const response = await handleFetch(getUrl(id), options);
    return response.json();
});

export const fetchMoreReviews = createAsyncThunk('reviews/fetchMoreReviews', async (id, { getState }) => {
    const { reviews } = getState();
    const { getUrl, options } = dbApiConfig.movies.reviews;

    const response = await handleFetch(getUrl(id, 'en-US', reviews.currentPage + 1), options);
    return response.json();
});

export const reviewsSlice = createSlice({
    name: 'reviews',
    initialState: {
        totalPages: 1,
        currentPage: 1,
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
                const { results, page, total_pages } = action.payload;

                state.reviews = results;
                state.loading = false;
                state.error = '';

                state.currentPage = page;
                state.totalPages = total_pages;
            })
            .addCase(fetchReviews.rejected, (state) => {
                state.error = ERROR_MOVIES_FETCH;
            })

        builder
            .addCase(fetchMoreReviews.fulfilled, (state, action) => {
                const { results, page, total_pages } = action.payload;

                state.reviews = [...state.reviews, ...results];
                state.currentPage = page;
                state.totalPages = total_pages;
            })
            .addCase(fetchMoreReviews.rejected, (state) => {
                state.error = ERROR_MOVIES_FETCH;
            });
    }
})

export default reviewsSlice.reducer;