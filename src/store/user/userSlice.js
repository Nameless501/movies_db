import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { handleFetch } from '../../utils/Api';
import { dbApiConfig } from '../../utils/configs';

// get user profile data

export const fetchProfileData = createAsyncThunk(
    'user/fetchProfileData',
    async (arg, { getState }) => {
        const { getUrl, options } = dbApiConfig.user.profile;
        const { session_id } = getState().authorization;

        const response = await handleFetch(getUrl(session_id), options);
        const profileData = await response.json();

        return (profileData.success === false) ? Promise.reject(profileData.status_message) : profileData;
    }
);

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        data: {},
        isLoggedIn: false,
        loading: 'idle',
        error: '',
    },
    reducers: {
        signOut: (state) => {
            state.data = {};
            state.isLoggedIn = false;
        }
    },
    extraReducers: builder => {

        // profile data

        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.loading = 'pending';
            })
            .addCase(fetchProfileData.fulfilled, (state, { payload }) => {
                    state.data = payload;
                    state.loading = 'fulfilled';
                    state.error = '';
                    state.isLoggedIn = true;
            })
            .addCase(fetchProfileData.rejected, (state, { error }) => {
                state.error = error.message;
                state.loading = 'rejected';
                state.isLoggedIn = false;
            });
    }
})

export const { signOut } = userSlice.actions

export default userSlice.reducer;