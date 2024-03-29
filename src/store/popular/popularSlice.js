import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { handleFetch } from "../../utils/Api";
import { dbApiConfig } from "../../utils/configs";
import { ERROR_MOVIES_FETCH } from "../../utils/constants";

export const fetchPopular = createAsyncThunk(
  "popular/fetchPopular",
  async (type) => {
    const { getUrl, options } = dbApiConfig.data.popular;

    const response = await handleFetch(getUrl(type), options);
    const data = await response.json();

    return data;
  },
  {
    condition: (type, { getState }) => {
      const { popular } = getState();
      const { loading } = popular[type];

      if (loading === "pending" || loading === "fulfilled") {
        return false;
      }
    },
  }
);

export const fetchMorePopular = createAsyncThunk(
  "popular/fetchMorePopular",
  async (type, { getState }) => {
    const { popular } = getState();
    const { getUrl, options } = dbApiConfig.data.popular;

    const response = await handleFetch(
      getUrl(type, "ru-RU", popular[type].currentPage + 1),
      options
    );
    const data = await response.json();

    return data;
  }
);

export const popularSlice = createSlice({
  name: "popular",
  initialState: {
    movie: {
      totalPages: 1,
      currentPage: 1,
      results: [],
      loading: "idle",
      error: "",
    },
    tv: {
      totalPages: 1,
      currentPage: 1,
      results: [],
      loading: "idle",
      error: "",
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopular.pending, (state, { meta }) => {
        const type = meta.arg;
        state[type].loading = "pending";
      })
      .addCase(fetchPopular.fulfilled, (state, { payload, meta }) => {
        const { results, page, total_pages } = payload;
        const type = meta.arg;
        const current = state[type];

        current.results = results;
        current.loading = "fulfilled";
        current.error = "";

        current.currentPage = page;
        current.totalPages = total_pages;
      })
      .addCase(fetchPopular.rejected, (state, { meta }) => {
        const type = meta.arg;

        state[type].loading = "rejected";
        state[type].error = ERROR_MOVIES_FETCH;
      });

    builder
      .addCase(fetchMorePopular.pending, (state) => {
        state.loading = "pendingNextPage";
      })
      .addCase(fetchMorePopular.fulfilled, (state, { payload, meta }) => {
        const { results, page, total_pages } = payload;
        const type = meta.arg;
        const current = state[type];

        current.results = [...current.results, ...results];
        current.currentPage = page;
        current.totalPages = total_pages;
        current.loading = "fulfilled";
      })
      .addCase(fetchMorePopular.rejected, (state, { meta }) => {
        const type = meta.arg;

        state[type].loading = "rejected";
        state[type].error = ERROR_MOVIES_FETCH;
      });
  },
});

export default popularSlice.reducer;
