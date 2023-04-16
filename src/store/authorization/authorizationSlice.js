import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { handleFetch } from '../../utils/Api';
import { dbApiConfig } from '../../utils/configs';

export const fetchRequestToken = createAsyncThunk(
    'authorization/fetchRequestToken',
    async () => {
        const { getUrl, options } = dbApiConfig.authorization.token;
        const response = await handleFetch(getUrl(), options);
        const { success, status_message, request_token } = await response.json();

        return success ? request_token : Promise.reject(status_message);
    }
);

export const fetchTokenAuthentication = createAsyncThunk(
    'authorization/fetchTokenAuthentication',
    async (inputsValue, { getState }) => {
        const { getUrl, options } = dbApiConfig.authorization.login;
        const { request_token } = getState().authorization;

        const response = await handleFetch(
            getUrl(),
            options,
            { ...inputsValue, request_token }
        );
        const { success, status_message } = await response.json();

        return success ? request_token : Promise.reject(status_message);
    }
);

export const fetchSessionId = createAsyncThunk(
    'authorization/fetchSessionId',
    async (args, { getState }) => {
        const { getUrl, options } = dbApiConfig.authorization.session;
        const { request_token } = getState().authorization;

        const sessionIdResponse = await handleFetch(
            getUrl(),
            options,
            { request_token }
        );
        const { success, status_message, session_id } = await sessionIdResponse.json();

        return success ? session_id : Promise.reject(status_message);
    }
);

export const getTokenFromQueryAsync = createAsyncThunk(
    'authorization/setRequestTokenAsync',
    async (query) => {
        const queryParams = new URLSearchParams(query);

        const request_token = queryParams.get('request_token');
        const approved = queryParams.get('approved');

        if(request_token && approved) {
            return request_token;
        } else {
            return Promise.reject();
        }
    }
);

export const authorizationSlice = createSlice({
    name: 'authorization',
    initialState: {
        session_id: null,
        request_token: null,
        loading: 'idle',
        error: '',
    },
    reducers: {},
    extraReducers: builder => {

        // request token

        builder
            .addCase(fetchRequestToken.pending, (state) => {
                state.loading = 'pending';
            })
            .addCase(fetchRequestToken.fulfilled, (state, { payload }) => {
                state.request_token = payload;
                state.loading = 'fulfilled';
                state.error = '';
            })
            .addCase(fetchRequestToken.rejected, (state) => {
                state.error = 'Что-то пошло не так, попробуйте еще раз позже.';
                state.loading = 'rejected';
            });

        // token authorization with login

        builder
            .addCase(fetchTokenAuthentication.pending, (state) => {
                state.loading = 'pending';
            })
            .addCase(fetchTokenAuthentication.fulfilled, (state, { payload }) => {
                state.request_token = payload;
                state.loading = 'fulfilled';
                state.error = '';
            })
            .addCase(fetchTokenAuthentication.rejected, (state, { error }) => {
                state.error = error.message;
                state.loading = 'rejected';
            });

        // set request token

        builder
            .addCase(getTokenFromQueryAsync.fulfilled, (state, { payload }) => {
                state.request_token = payload;
                state.loading = 'fulfilled';
                state.error = '';
            });

        // session id

        builder
            .addCase(fetchSessionId.pending, (state) => {
                state.loading = 'pending';
            })
            .addCase(fetchSessionId.fulfilled, (state, { payload }) => {
                state.session_id = payload;
                state.loading = 'fulfilled';
                state.error = '';
            })
            .addCase(fetchSessionId.rejected, (state, { error }) => {
                state.error = error.message;
                state.loading = 'rejected';
            });
    }
});

export default authorizationSlice.reducer;