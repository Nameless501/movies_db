import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { handleFetch } from '../../utils/Api';
import { moviesApiConfig } from '../../utils/configs';
import { ERROR_MOVIES_FETCH } from '../../utils/constants';

export const fetchTopRatedMovies = createAsyncThunk('topRatedMovies/fetchTopRatedMovies', async () => {
    const { url, options } = moviesApiConfig.topRated;
    const response = await handleFetch(url + '&language=ru-RU&page=1', options);
    return response.json();
});

export const fetchMoreTopRatedMovies = createAsyncThunk('topRatedMovies/fetchMoreTopRatedMovies', async (arg, { getState }) => {
    const { topRated } = getState();
    const { url, options } = moviesApiConfig.topRated;

    const response = await handleFetch(url + `&language=ru-RU&page=${topRated.page}`, options);
    return response.json();
});

export const topRatedMoviesSlice = createSlice({
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
            .addCase(fetchTopRatedMovies.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchTopRatedMovies.fulfilled, (state, action) => {
                const { results } = action.payload;
                state.movies = results;
                state.loading = false;
                state.error = '';
                state.page += 1;
            })
            .addCase(fetchTopRatedMovies.rejected, (state) => {
                state.error = ERROR_MOVIES_FETCH;
            })

        builder
            .addCase(fetchMoreTopRatedMovies.fulfilled, (state, action) => {
                const { results } = action.payload;
                state.movies = [...state.movies, ...results];
                state.page += 1;
            })
            .addCase(fetchMoreTopRatedMovies.rejected, (state) => {
                state.error = ERROR_MOVIES_FETCH;
            })
    }
})

export const { filterMovies } = topRatedMoviesSlice.actions;

export default topRatedMoviesSlice.reducer;