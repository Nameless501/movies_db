import { useEffect, useLayoutEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTopRated, fetchMoreTopRated } from '../../../store/topRated/topRatedSlice';
import MoviesFeed from '../../components/MoviesFeed/MoviesFeed';
import MoviesPageWrapper from '../../components/MoviesPageWrapper/MoviesPageWrapper';

function TopRatedPage({ title, type = 'movies' }) {
    const scrollRef = useRef(0);
    const { results, loading, error, currentPage, totalPages } = useSelector(state => state.topRated);
    const dispatch = useDispatch();

    // API fetch

    useEffect(() => {
        dispatch(fetchTopRated(type));
    }, [dispatch, type]);

    function handleLoadMore() {
        scrollRef.current = window.pageYOffset;
        dispatch(fetchMoreTopRated(type));
    };

    // restore scroll position after rerender movies list

    useLayoutEffect(() => {
        window.scrollTo(0, scrollRef.current);
    }, [results]);

    function getRandom(max) {
        return Math.floor(Math.random() * max);
    }

    return (
        <MoviesPageWrapper
            title={title}
            poster={results[getRandom(19)]?.backdrop_path}
        >
            <MoviesFeed
                movies={results}
                loading={loading}
                error={error}
                currentPage={currentPage}
                totalPages={totalPages}
                handleLoadMore={handleLoadMore}
            />
        </MoviesPageWrapper>
    );
}

export default TopRatedPage;