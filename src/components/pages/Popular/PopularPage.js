import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPopular, fetchMorePopular } from '../../../store/popular/popularSlice';
import CardsFeed from '../../components/CardsFeed/CardsFeed';
import FeedPageWrapper from '../../components/FeedPageWrapper/FeedPageWrapper';

function PopularPage({ title, type = 'movies' }) {
    const { results, loading, error, currentPage, totalPages } = useSelector(state => state.popular);
    const dispatch = useDispatch();

    // API fetch

    useEffect(() => {
        dispatch(fetchPopular(type));
    }, [dispatch, type]);

    function handleLoadMore() {
        dispatch(fetchMorePopular(type));
    };

    function getRandom(max) {
        return Math.floor(Math.random() * max);
    }

    return (
        <FeedPageWrapper
            title={title}
            poster={results[getRandom(19)]?.backdrop_path}
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

export default PopularPage;