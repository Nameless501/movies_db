import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTopRated, fetchMoreTopRated } from '../../../store/topRated/topRatedSlice';
import CardsFeed from '../../components/CardsFeed/CardsFeed';
import FeedPageWrapper from '../../components/FeedPageWrapper/FeedPageWrapper';

function TopRatedPage({ title, type = 'movies' }) {
    const { results, loading, error, currentPage, totalPages } = useSelector(state => state.topRated);
    const dispatch = useDispatch();

    // API fetch

    useEffect(() => {
        dispatch(fetchTopRated(type));
    }, [dispatch, type]);

    function handleLoadMore() {
        dispatch(fetchMoreTopRated(type));
    };

    function getRandom(max) {
        return Math.floor(Math.random() * max);
    }

    return (
        <FeedPageWrapper
            title={title}
            posterHorizontal={results[getRandom(19)]?.backdrop_path}
            posterVertical={results[getRandom(19)]?.poster_path}
        >
            <CardsFeed
                movies={results}
                loading={loading}
                error={error}
                currentPage={currentPage}
                totalPages={totalPages}
                handleLoadMore={handleLoadMore}
                type={type}
            />
        </FeedPageWrapper>
    );
}

export default TopRatedPage;