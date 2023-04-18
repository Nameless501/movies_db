import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPopular, fetchMorePopular } from '../../../store/popular/popularSlice';
import CardsFeed from '../../components/CardsFeed/CardsFeed';
import FeedPageWrapper from '../../components/FeedPageWrapper/FeedPageWrapper';
import { getRandomElement } from '../../../utils/utils';

function PopularPage({ title, type }) {
    const { results, loading, error, currentPage, totalPages } = useSelector(state => state.popular[type]);
    const dispatch = useDispatch();

    // API fetch

    useEffect(() => {
        dispatch(fetchPopular(type));
    }, [dispatch, type]);

    function handleLoadMore() {
        dispatch(fetchMorePopular(type));
    };

    return (
        <FeedPageWrapper
            title={title}
            posterHorizontal={getRandomElement(results)?.backdrop_path}
            posterVertical={getRandomElement(results)?.poster_path}
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