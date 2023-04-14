import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { handleFetch } from '../../utils/Api';
import { dbApiConfig } from '../../utils/configs';
import { USER_API_PATH_REGISTRATION } from '../../utils/constants';

export const fetchRequestToken = createAsyncThunk(
    'user/fetchRequestToken',
    async () => {
        const { getUrl, options } = dbApiConfig.user.requestToken;
        const requestTokenResponse = await handleFetch(getUrl(), options);
        const requestTokenResponseEncoded = await requestTokenResponse.json();

        return requestTokenResponseEncoded;
    }
);

export const fetchSessionId = createAsyncThunk(
    'user/fetchSessionId',
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
    }
})

export default userSlice.reducer;