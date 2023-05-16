import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { handleFetch } from "../../utils/Api";
import { dbApiConfig } from "../../utils/configs";

// get user profile data

export const fetchProfileData = createAsyncThunk(
  "user/fetchProfileData",
  async (arg, { getState }) => {
    const { getUrl, options } = dbApiConfig.user.profile;
    const { session_id } = getState().authorization;

    const response = await handleFetch(getUrl(session_id), options);
    const profileData = await response.json();

    return profileData.success === false
      ? Promise.reject(profileData.status_message)
      : profileData;
  }
);

// get movie/tv states (is in user watchlist, favorite ...)

export const fetchAccountStates = createAsyncThunk(
  "user/fetchAccountStates",
  async ({ type, id }, { getState }) => {
    const { getUrl, options } = dbApiConfig.user.states;
    const { session_id } = getState().authorization;

    const response = await handleFetch(getUrl(type, id, session_id), options);
    const data = await response.json();

    return data.success === false ? Promise.reject(data.status_message) : data;
  }
);

// add movie/tv to watch list

export const addToWatchList = createAsyncThunk(
  "user/addToWatchList",
  async ({ type, id }, { getState }) => {
    const { getUrl, options } = dbApiConfig.user.watchlistAdd;
    const { session_id } = getState().authorization;
    const { user } = getState().user;

    const response = await handleFetch(getUrl(session_id, user.id), options, {
      media_type: type,
      media_id: id,
      watchlist: true,
    });
    const data = await response.json();

    return data.success
      ? Promise.resolve()
      : Promise.reject(data.status_message);
  }
);

// rate movie/tv

export const setRating = createAsyncThunk(
  "user/setRating",
  async ({ type, id, value }, { getState }) => {
    const { getUrl, options } = dbApiConfig.user.rating;
    const { session_id } = getState().authorization;

    const response = await handleFetch(getUrl(type, id, session_id), options, {
      value,
    });
    const data = await response.json();

    return data.success
      ? Promise.resolve()
      : Promise.reject(data.status_message);
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: {
    states: {
      tv: {},
      movie: {},
    },
    user: {},
    isLoggedIn: false,
    loading: "idle",
    error: "",
  },
  reducers: {
    signOut: (state) => {
      state.user = {};
      state.states = {
        tv: {},
        movie: {},
      };
      state.isLoggedIn = false;
    },
  },
  extraReducers: (builder) => {
    // profile data

    builder
      .addCase(fetchProfileData.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(fetchProfileData.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.loading = "fulfilled";
        state.error = "";
        state.isLoggedIn = true;
      })
      .addCase(fetchProfileData.rejected, (state, { error }) => {
        state.error = error.message;
        state.loading = "rejected";
        state.isLoggedIn = false;
      });

    // movie/tv states

    builder
      .addCase(fetchAccountStates.pending, (state, { meta }) => {
        const { id, type } = meta.arg;
        state.states[type][id] = { loading: "pending" };
      })
      .addCase(fetchAccountStates.fulfilled, (state, { meta, payload }) => {
        const { type } = meta.arg;
        const { id, favorite, rated, watchlist } = payload;

        state.states[type][id] = {
          favorite,
          rated,
          watchlist,
          loading: "fulfilled",
        };
      })
      .addCase(fetchAccountStates.rejected, (state, { meta }) => {
        const { id, type } = meta.arg;
        state.states[type][id] = { loading: "rejected" };
      });

    // add to watch list

    builder
      .addCase(addToWatchList.pending, (state, { meta }) => {
        const { id, type } = meta.arg;
        state.states[type][id] = {
          ...state.states[type][id],
          loading: "pending",
        };
      })
      .addCase(addToWatchList.fulfilled, (state, { meta }) => {
        const { type, id } = meta.arg;

        state.states[type][id] = {
          ...state.states[type][id],
          watchlist: true,
          loading: "fulfilled",
        };
      })
      .addCase(addToWatchList.rejected, (state, { meta }) => {
        const { id, type } = meta.arg;
        state.states[type][id] = {
          ...state.states[type][id],
          loading: "rejected",
        };
      });

    // rate movie/tv

    builder
      .addCase(setRating.pending, (state, { meta }) => {
        const { id, type } = meta.arg;
        state.states[type][id] = {
          ...state.states[type][id],
          loading: "pending",
        };
      })
      .addCase(setRating.fulfilled, (state, { meta }) => {
        const { type, id, value } = meta.arg;

        state.states[type][id] = {
          ...state.states[type][id],
          rated: { value },
          loading: "fulfilled",
        };
      })
      .addCase(setRating.rejected, (state, { meta }) => {
        const { id, type } = meta.arg;
        state.states[type][id] = {
          ...state.states[type][id],
          loading: "rejected",
        };
      });
  },
});

export const { signOut } = userSlice.actions;

export default userSlice.reducer;
