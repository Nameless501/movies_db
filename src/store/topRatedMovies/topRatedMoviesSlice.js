import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { handleFetch } from '../../utils/Api';
import { dbApiConfig } from '../../utils/configs';
import { ERROR_MOVIES_FETCH } from '../../utils/constants';

export const fetchTopRatedMovies = createAsyncThunk('topRatedMovies/fetchTopRatedMovies', async () => {
    const { getUrl, options } = dbApiConfig.movies.topRated;
    const response = await handleFetch(getUrl(), options);
    return response.json();
});

export const fetchMoreTopRatedMovies = createAsyncThunk('topRatedMovies/fetchMoreTopRatedMovies', async (arg, { getState }) => {
    const { topRated } = getState();
    const { getUrl, options } = dbApiConfig.movies.topRated;

    const response = await handleFetch(getUrl('ru-RU', topRated.currentPage + 1), options);
    return response.json();
});

export const topRatedMoviesSlice = createSlice({
    name: 'movies',
    initialState: {
        totalPages: 1,
        currentPage: 1,
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
                const { results, page, total_pages } = action.payload;

                state.movies = results;
                state.loading = false;
                state.error = '';

                state.currentPage = page;
                state.totalPages = total_pages;
            })
            .addCase(fetchTopRatedMovies.rejected, (state) => {
                state.error = ERROR_MOVIES_FETCH;
            })

        builder
            .addCase(fetchMoreTopRatedMovies.fulfilled, (state, action) => {
                const { results, page, total_pages } = action.payload;

                state.movies = [...state.movies, ...results];
                state.currentPage = page;
                state.totalPages = total_pages;
            })
            .addCase(fetchMoreTopRatedMovies.rejected, (state) => {
                state.error = ERROR_MOVIES_FETCH;
            })
    }
})

export const { filterMovies } = topRatedMoviesSlice.actions;

export default topRatedMoviesSlice.reducer;