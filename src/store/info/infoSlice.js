import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { handleFetch } from '../../utils/Api';
import { dbApiConfig } from '../../utils/configs';
import { ERROR_MOVIES_FETCH } from '../../utils/constants';

export const fetchInfo = createAsyncThunk('info/fetchMovieInfo', async ({ type, id }) => {
    const { getUrl, options } = dbApiConfig[type].info;

    const response = await handleFetch(getUrl(id), options);
    return response.json();
});

export const infoSlice = createSlice({
    name: 'info',
    initialState: {
        info: {},
        loading: 'idle',
        error: '',
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchInfo.pending, (state) => {
                state.loading = 'pending';
            })
            .addCase(fetchInfo.fulfilled, (state, action) => {
                state.info = action.payload;
                state.loading = 'fulfilled';
                state.error = '';
            })
            .addCase(fetchInfo.rejected, (state) => {
                state.error = ERROR_MOVIES_FETCH;
                state.loading = 'rejected';
            });
    }
})

export default infoSlice.reducer;