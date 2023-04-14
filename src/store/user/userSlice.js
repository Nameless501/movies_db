import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { handleFetch } from '../../utils/Api';
import { dbApiConfig } from '../../utils/configs';

export const fetchRequestToken = createAsyncThunk(
    'user/fetchRequestToken',
    async () => {
        const { getUrl, options } = dbApiConfig.user.requestToken;
        const requestTokenResponse = await handleFetch(getUrl(), options);
        const requestTokenResponseEncoded = await requestTokenResponse.json();

        sessionStorage.setItem('requestToken', requestTokenResponseEncoded.request_token);

        return requestTokenResponseEncoded;
    }
);

export const fetchSessionId = createAsyncThunk(
    'user/fetchSessionId',
    async (requestToken) => {
        const { getUrl, options } = dbApiConfig.user.sessionId;

        const sessionIdResponse = await handleFetch(
            getUrl(),
            options,
            { request_token: requestToken }
        );
        const sessionIdResponseEncoded = await sessionIdResponse.json();

        return sessionIdResponseEncoded;
    }
);

export const fetchSessionIdWithLogin = createAsyncThunk(
    'user/fetchSessionIdWithLogin',
    async (inputsValue, { dispatch }) => {
        const { login, sessionId } = dbApiConfig.user;

        const requestTokenResponse = await dispatch(fetchRequestToken());
        const requestTokenResponseEncoded = requestTokenResponse.payload.request_token;

        const loginResponse = await handleFetch(
            login.getUrl(),
            login.options,
            { ...inputsValue, request_token: requestTokenResponseEncoded }
        );
        const loginResponseEncoded = await loginResponse.json();

        if (loginResponseEncoded.success) {
            dispatch(fetchSessionId(loginResponseEncoded.request_token));
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
            .addCase(fetchSessionIdWithLogin.pending, (state) => {
                state.loading = 'pending';
            })
            .addCase(fetchSessionIdWithLogin.fulfilled, (state, { payload }) => {
                state.loading = 'fulfilled';
                state.error = '';
            })
            .addCase(fetchSessionIdWithLogin.rejected, (state) => {
                state.error = 'Error';
                state.loading = 'rejected';
            });

        builder
            .addCase(fetchRequestToken.pending, (state) => {
                state.loading = 'pending';
            })
            .addCase(fetchRequestToken.fulfilled, (state, { payload }) => {
                state.loading = 'fulfilled';
                state.error = '';
            })
            .addCase(fetchRequestToken.rejected, (state) => {
                state.error = 'Error';
                state.loading = 'rejected';
            });

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