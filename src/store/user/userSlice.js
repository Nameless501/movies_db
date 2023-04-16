import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { handleFetch } from '../../utils/Api';
import { dbApiConfig } from '../../utils/configs';

export const fetchProfileData = createAsyncThunk(
    'user/fetchProfileData',
    async (arg, { getState }) => {
        const { getUrl, options } = dbApiConfig.user.profile;

        const { session_id } = getState().authorization;

        const response = await handleFetch(getUrl(session_id), options);
        const profileData = await response.json();

        return profileData;
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
    reducers: {},
    extraReducers: builder => {

        // profile data

        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.loading = 'pending';
            })
            .addCase(fetchProfileData.fulfilled, (state, { payload }) => {
                if(payload.success === false) {
                    state.error = 'Что-то пошло не так, попробуйте еще раз позже.';
                    state.loading = 'rejected';
                    state.isLoggedIn = false;
                } else {
                    state.loading = 'fulfilled';
                    state.error = '';
                    state.isLoggedIn = true;
                }
            })
            .addCase(fetchProfileData.rejected, (state, { error }) => {
                state.error = error.message;
                state.loading = 'rejected';
            });
    }
})

export default userSlice.reducer;