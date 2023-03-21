import { useEffect, useLayoutEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNowPlayingMovies, fetchMoreNowPlayingMovies } from '../../../store/nowPlayingMovies/nowPlayingMoviesSlice';
import MoviesFeed from '../../components/MoviesFeed/MoviesFeed';

function NowPlayingMovies() {
    const scrollRef = useRef(0);
    const { movies, loading, error, currentPage, totalPages } = useSelector(state => state.nowPlaying);
    const dispatch = useDispatch();

    // API fetch

    useEffect(() => {
        dispatch(fetchNowPlayingMovies());
    }, [dispatch]);

    function handleLoadMore() {
        scrollRef.current = window.pageYOffset;
        dispatch(fetchMoreNowPlayingMovies());
    }

    // restore scroll position after rerender movies list

    useLayoutEffect(() => {
        window.scrollTo(0, scrollRef.current);
    }, [movies])

    return (
        <MoviesFeed
            movies={movies}
            loading={loading}
            error={error}
            currentPage={currentPage}
            totalPages={totalPages}
            handleLoadMore={handleLoadMore}
        />
    );
}

export default NowPlayingMovies;