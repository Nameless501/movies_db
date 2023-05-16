import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { handleFetch } from "../../utils/Api";
import { dbApiConfig } from "../../utils/configs";
import { ERROR_MOVIES_FETCH } from "../../utils/constants";

export const fetchTrailer = createAsyncThunk(
  "trailer/fetchTrailer",
  async ({ type, id }) => {
    const { getUrl, options } = dbApiConfig.data.trailer;

    const response = await handleFetch(getUrl(type, id), options);
    return response.json();
  },
  {
    condition: (curr, { getState }) => {
      const {
        trailer: { prev },
      } = getState();

      if (prev.id === curr.id && prev.type === curr.type) {
        return false;
      }
    },
  }
);

export const trailerSlice = createSlice({
  name: "trailer",
  initialState: {
    prev: {},
    key: "",
    loading: "idle",
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrailer.pending, (state, { meta }) => {
        state.loading = "pending";
        state.prev = meta.arg;
      })
      .addCase(fetchTrailer.fulfilled, (state, action) => {
        const { results } = action.payload;
        const key = results?.[0]?.key;

        if (key) {
          state.key = key;
          state.error = "";
          state.loading = "fulfilled";
        } else {
          state.key = "";
          state.error = "Не удалось найти трейлер";
          state.loading = "rejected";
        }
      })
      .addCase(fetchTrailer.rejected, (state) => {
        state.error = ERROR_MOVIES_FETCH;
        state.loading = "rejected";
      });
  },
});

export default trailerSlice.reducer;
