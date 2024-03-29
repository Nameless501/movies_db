import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { handleFetch } from "../../utils/Api";
import { dbApiConfig } from "../../utils/configs";
import { ERROR_MOVIES_FETCH } from "../../utils/constants";

export const fetchNowPlaying = createAsyncThunk(
  "nowPlaying/fetchNowPlaying",
  async (type = "movie") => {
    const { getUrl, options } = dbApiConfig.data.nowPlaying;

    const response = await handleFetch(getUrl(type), options);
    return response.json();
  },
  {
    condition: (arg, { getState }) => {
      const {
        nowPlaying: { loading },
      } = getState();
      if (loading === "pending" || loading === "fulfilled") {
        return false;
      }
    },
  }
);

export const fetchMoreNowPlaying = createAsyncThunk(
  "nowPlaying/fetchMoreNowPlayingMovies",
  async (type = "movie", { getState }) => {
    const { nowPlaying } = getState();
    const { getUrl, options } = dbApiConfig.data.nowPlaying;

    const response = await handleFetch(
      getUrl(type, "ru-RU", nowPlaying.currentPage + 1),
      options
    );
    return response.json();
  }
);

export const nowPlayingSlice = createSlice({
  name: "nowPlaying",
  initialState: {
    totalPages: 1,
    currentPage: 1,
    results: [],
    loading: "idle",
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNowPlaying.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(fetchNowPlaying.fulfilled, (state, action) => {
        const { results, page, total_pages } = action.payload;

        state.results = results;
        state.loading = "fulfilled";
        state.error = "";

        state.currentPage = page;
        state.totalPages = total_pages;
      })
      .addCase(fetchNowPlaying.rejected, (state) => {
        state.error = ERROR_MOVIES_FETCH;
        state.loading = "rejected";
      });

    builder
      .addCase(fetchMoreNowPlaying.pending, (state) => {
        state.loading = "pendingNextPage";
      })
      .addCase(fetchMoreNowPlaying.fulfilled, (state, action) => {
        const { results, page, total_pages } = action.payload;

        state.results = [...state.results, ...results];
        state.currentPage = page;
        state.totalPages = total_pages;
        state.loading = "fulfilled";
      })
      .addCase(fetchMoreNowPlaying.rejected, (state) => {
        state.error = ERROR_MOVIES_FETCH;
        state.loading = "rejected";
      });
  },
});

export default nowPlayingSlice.reducer;
