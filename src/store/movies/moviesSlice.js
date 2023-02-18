import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { handleFetch } from '../../utils/Api';
import { moviesApiConfig } from '../../utils/configs';
import { ERROR_MOVIES_FETCH } from '../../utils/constants';

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
    const { url, options } = moviesApiConfig.topRated;
    const response = await handleFetch(url + '&page=1', options);
    return response.json();
});

export const fetchMoreMovies = createAsyncThunk('movies/fetchMoreMovies', async (arg, { getState }) => {
    const { movies } = getState();
    const { url, options } = moviesApiConfig.topRated;

    const response = await handleFetch(url + `&page=${movies.page}`, options);
    return response.json();
});

export const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        page: 1,
        movies: [],
        loading: false,
        error: '',
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchMovies.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchMovies.fulfilled, (state, action) => {
                const { results } = action.payload;
                state.movies = results;
                state.loading = false;
                state.error = '';
                state.page += 1;
            })
            .addCase(fetchMovies.rejected, (state) => {
                state.error = ERROR_MOVIES_FETCH;
            })

        builder
            .addCase(fetchMoreMovies.fulfilled, (state, action) => {
                const { results } = action.payload;
                state.movies = [...state.movies, ...results];
                state.page += 1;
            })
            .addCase(fetchMoreMovies.rejected, (state) => {
                state.error = ERROR_MOVIES_FETCH;
            })
    }
})

export const { filterMovies } = moviesSlice.actions;

export default moviesSlice.reducer;