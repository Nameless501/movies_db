import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { handleFetch } from "../../utils/Api";
import { dbApiConfig } from "../../utils/configs";
import { ERROR_MOVIES_FETCH } from "../../utils/constants";

export const fetchReviews = createAsyncThunk(
  "reviews/fetchMovieReviews",
  async ({ type, id }) => {
    const { getUrl, options } = dbApiConfig.data.reviews;

    const response = await handleFetch(getUrl(type, id), options);
    return response.json();
  },
  {
    condition: (curr, { getState }) => {
      const {
        reviews: { prev },
      } = getState();

      if (prev.id === curr.id && prev.type === curr.type) {
        return false;
      }
    },
  }
);

export const fetchMoreReviews = createAsyncThunk(
  "reviews/fetchMoreReviews",
  async ({ type, id }, { getState }) => {
    const { reviews } = getState();
    const { getUrl, options } = dbApiConfig.data.reviews;

    const response = await handleFetch(
      getUrl(type, id, "en-US", reviews.currentPage + 1),
      options
    );
    return response.json();
  }
);

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState: {
    prev: {},
    totalPages: 1,
    currentPage: 1,
    reviews: [],
    loading: "idle",
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviews.pending, (state, { meta }) => {
        state.loading = "pending";
        state.prev = meta.arg;
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        const { results, page, total_pages } = action.payload;

        state.reviews = results;
        state.loading = "fulfilled";
        state.error = "";

        state.currentPage = page;
        state.totalPages = total_pages;
      })
      .addCase(fetchReviews.rejected, (state) => {
        state.error = ERROR_MOVIES_FETCH;
        state.loading = "rejected";
      });

    builder
      .addCase(fetchMoreReviews.pending, (state) => {
        state.loading = "pendingNextPage";
      })
      .addCase(fetchMoreReviews.fulfilled, (state, action) => {
        const { results, page, total_pages } = action.payload;

        state.reviews = [...state.reviews, ...results];
        state.currentPage = page;
        state.totalPages = total_pages;
        state.loading = "fulfilled";
      })
      .addCase(fetchMoreReviews.rejected, (state) => {
        state.error = ERROR_MOVIES_FETCH;
        state.loading = "rejected";
      });
  },
});

export default reviewsSlice.reducer;
