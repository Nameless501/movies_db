import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { handleFetch } from '../../utils/Api';
import { dbApiConfig } from '../../utils/configs';
import { ERROR_MOVIES_FETCH } from '../../utils/constants';

export const fetchCredits = createAsyncThunk(
    'credits/fetchCredits',
    async ({ type, id }) => {
        const { getUrl, options } = dbApiConfig[type].credits;

        const response = await handleFetch(getUrl(id), options);
        return response.json();
    },
    {
        condition: (curr, { getState }) => {
            const { credits: { prev } } = getState();

            if(prev.id === curr.id && prev.type === curr.type) {
                return false;
            }
        }
    }
);

export const creditsSlice = createSlice({
    name: 'credits',
    initialState: {
        prev: {},
        cast: [],
        crew: [],
        loading: 'idle',
        error: '',
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchCredits.pending, (state, { meta }) => {
                state.loading = 'pending';
                state.prev = meta.arg;
            })
            .addCase(fetchCredits.fulfilled, (state, action) => {
                const { cast, crew } = action.payload;

                state.cast = cast;
                state.crew = crew;

                state.loading = 'fulfilled';
                state.error = '';
            })
            .addCase(fetchCredits.rejected, (state) => {
                state.error = ERROR_MOVIES_FETCH;
                state.loading = 'rejected';
            });
    }
})

export default creditsSlice.reducer;