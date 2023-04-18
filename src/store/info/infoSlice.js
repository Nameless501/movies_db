import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { handleFetch } from '../../utils/Api';
import { dbApiConfig } from '../../utils/configs';
import { ERROR_MOVIES_FETCH } from '../../utils/constants';

export const fetchInfo = createAsyncThunk(
    'info/fetchMovieInfo',
    async ({ type, id }) => {
        const { getUrl, options } = dbApiConfig.data.info;

        const response = await handleFetch(getUrl(type, id), options);
        return response.json();
    },
    {
        condition: (curr, { getState }) => {
            const { info: { prev } } = getState();

            if(prev.id === curr.id && prev.type === curr.type) {
                return false;
            }
        }
    }
);

export const infoSlice = createSlice({
    name: 'info',
    initialState: {
        prev: {},
        info: {},
        loading: 'idle',
        error: '',
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchInfo.pending, (state, { meta }) => {
                state.loading = 'pending';
                state.prev = meta.arg;
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