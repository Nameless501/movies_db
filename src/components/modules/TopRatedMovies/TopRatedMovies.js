import { useEffect, useLayoutEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTopRatedMovies, fetchMoreTopRatedMovies } from '../../../store/topRatedMovies/topRatedMoviesSlice';
import MoviesFeed from '../../components/MoviesFeed/MoviesFeed';

function TopRatedMovies() {
    const scrollRef = useRef(0);
    const { movies, loading, error, currentPage, totalPages } = useSelector(state => state.topRated);
    const dispatch = useDispatch();

    // API fetch

    useEffect(() => {
        dispatch(fetchTopRatedMovies());
    }, [dispatch]);

    function handleLoadMore() {
        scrollRef.current = window.pageYOffset;
        dispatch(fetchMoreTopRatedMovies());
    };

    // restore scroll position after rerender movies list

    useLayoutEffect(() => {
        window.scrollTo(0, scrollRef.current);
    }, [movies]);

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

export default TopRatedMovies;