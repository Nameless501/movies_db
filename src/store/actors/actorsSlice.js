import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { handleFetch } from '../../utils/Api';
import { dbApiConfig } from '../../utils/configs';
import { ERROR_MOVIES_FETCH } from '../../utils/constants';

export const fetchActors = createAsyncThunk('actors/fetchMovieActors', async ({ type, id }) => {
    const { getUrl, options } = dbApiConfig[type].credits;

    const response = await handleFetch(getUrl(id), options);
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
            });
    }
})

export default actorsSlice.reducer;