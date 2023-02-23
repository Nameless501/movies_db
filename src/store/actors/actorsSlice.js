import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { handleFetch } from '../../utils/Api';
import { moviesApiConfig } from '../../utils/configs';
import { MOVIES_API_KEY } from '../../utils/constants';
import { ERROR_MOVIES_FETCH } from '../../utils/constants';

export const fetchActors = createAsyncThunk('actors/fetchActors', async (id) => {
    const { url, options } = moviesApiConfig.movieInfo;

    const response = await handleFetch(url + id + '/credits' + MOVIES_API_KEY + '&language=ru-RU', options);
    return response.json();
});

export const actorsSlice = createSlice({
    name: 'actors',
    initialState: {
        cast: [],
        crew: [],
        loading: false,
        error: '',
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchActors.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchActors.fulfilled, (state, action) => {
                const { cast, crew } = action.payload;

                state.cast = cast;
                state.crew = crew;

                state.loading = false;
                state.error = '';
            })
            .addCase(fetchActors.rejected, (state) => {
                state.error = ERROR_MOVIES_FETCH;
            })
    }
})

export const { } = actorsSlice.actions;

export default actorsSlice.reducer;