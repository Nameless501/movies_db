import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNowPlaying, fetchMoreNowPlaying } from '../../../store/nowPlaying/nowPlayingSlice';
import CardsFeed from '../../components/CardsFeed/CardsFeed';
import FeedPageWrapper from '../../components/FeedPageWrapper/FeedPageWrapper';

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

    function getRandom(max) {
        return Math.floor(Math.random() * max);
    }

    return (
        <FeedPageWrapper
            title='Сейчас в прокате'
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
                type='movies'
            />
        </FeedPageWrapper>
    );
}

export default NowPlayingPage;