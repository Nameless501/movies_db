import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNowPlaying, fetchMoreNowPlaying } from '../../../store/nowPlaying/nowPlayingSlice';
import CardsFeed from '../../components/CardsFeed/CardsFeed';
import FeedPageWrapper from '../../components/FeedPageWrapper/FeedPageWrapper';
import { getRandomElement } from '../../../utils/utils';

function NowPlayingPage() {
    const { results, loading, error, currentPage, totalPages } = useSelector(state => state.nowPlaying);
    const dispatch = useDispatch();

    // API fetch

    useEffect(() => {
        dispatch(fetchNowPlaying());
    }, [dispatch]);

    function handleLoadMore() {
        dispatch(fetchMoreNowPlaying());
    }

    return (
        <FeedPageWrapper
            title='Сейчас в прокате'
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
                type='movies'
            />
        </FeedPageWrapper>
    );
}

export default NowPlayingPage;