import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { handleFetch } from '../../utils/Api';
import { dbApiConfig } from '../../utils/configs';
import { ERROR_MOVIES_FETCH } from '../../utils/constants';

export const fetchTrailer = createAsyncThunk('trailer/fetchTrailer', async (id) => {
    const { getUrl, options } = dbApiConfig.movies.trailer;

    const response = await handleFetch(getUrl(id), options);
    return response.json();
});

export const trailerSlice = createSlice({
    name: 'trailer',
    initialState: {
        key: '',
        loading: false,
        error: '',
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchTrailer.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchTrailer.fulfilled, (state, action) => {
                const { results } = action.payload;
                const key = results?.[0]?.key;

                if (key) {
                    state.key = key;
                    state.error = '';
                } else {
                    state.key = '';
                    state.error = 'Не удалось найти трейлер';
                }

                state.loading = false;
            })
            .addCase(fetchTrailer.rejected, (state) => {
                state.error = ERROR_MOVIES_FETCH;
            })
    }
})

export default trailerSlice.reducer;