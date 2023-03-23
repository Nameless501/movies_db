import { useEffect, useLayoutEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPopular, fetchMorePopular } from '../../../store/popular/popularSlice';
import MoviesFeed from '../../components/MoviesFeed/MoviesFeed';

import MoviesPageWrapper from '../../components/MoviesPageWrapper/MoviesPageWrapper';

function PopularPage({ title, type = 'movies' }) {
    const scrollRef = useRef(0);
    const { results, loading, error, currentPage, totalPages } = useSelector(state => state.popular);
    const dispatch = useDispatch();

    // API fetch

    useEffect(() => {
        dispatch(fetchPopular(type));
    }, [dispatch, type]);

    function handleLoadMore() {
        scrollRef.current = window.pageYOffset;
        dispatch(fetchMorePopular(type));
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

export default PopularPage;