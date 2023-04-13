import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { handleFetch } from '../../utils/Api';
import { dbApiConfig } from '../../utils/configs';

export const fetchSessionId = createAsyncThunk(
    'user/fetchSessionId',
    async (inputsValue) => {
        const { requestToken, login, sessionId } = dbApiConfig.user;

        const requestTokenResponse = await handleFetch(requestToken.getUrl(), requestToken.options);
        const requestTokenResponseEncoded = await requestTokenResponse.json();

        const loginResponse = await handleFetch(
            login.getUrl(),
            login.options,
            { ...inputsValue, request_token: requestTokenResponseEncoded.request_token }
        );
        const loginResponseEncoded = await loginResponse.json();

        if(loginResponseEncoded.success) {
            const sessionIdResponse = await handleFetch(
                sessionId.getUrl(),
                sessionId.options,
                { request_token: loginResponseEncoded.request_token }
            );
            const sessionIdResponseEncoded = await sessionIdResponse.json();

            return sessionIdResponseEncoded.success ? sessionIdResponseEncoded : Promise.reject();
        } else {
            return Promise.reject(loginResponseEncoded.status_message);
        }
    }
);

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        sessionId: null,
        isLoggedIn: false,
        loading: 'idle',
        error: '',
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchSessionId.pending, (state) => {
                state.loading = 'pending';
            })
            .addCase(fetchSessionId.fulfilled, (state, { payload }) => {
                state.sessionId = payload.session_id;
                state.loading = 'fulfilled';
                state.isLoggedIn = true;
                state.error = '';
            })
            .addCase(fetchSessionId.rejected, (state) => {
                state.error = 'Error';
                state.loading = 'rejected';
            });
    }
})

export default userSlice.reducer;