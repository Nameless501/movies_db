import { useEffect, useLayoutEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNowPlaying, fetchMoreNowPlaying } from '../../../store/nowPlaying/nowPlayingSlice';
import CardsFeed from '../../components/CardsFeed/CardsFeed';
import FeedPageWrapper from '../../components/FeedPageWrapper/FeedPageWrapper';

function NowPlayingPage() {
    const scrollRef = useRef(0);
    const { results, loading, error, currentPage, totalPages } = useSelector(state => state.nowPlaying);
    const dispatch = useDispatch();

    // API fetch

    useEffect(() => {
        dispatch(fetchNowPlaying());
    }, [dispatch]);

    function handleLoadMore() {
        scrollRef.current = window.pageYOffset;
        dispatch(fetchMoreNowPlaying());
    }

    // restore scroll position after rerender movies list

    useLayoutEffect(() => {
        window.scrollTo(0, scrollRef.current);
    }, [results])

    function getRandom(max) {
        return Math.floor(Math.random() * max);
    }

    return (
        <FeedPageWrapper
            title='Сейчас в прокате'
            poster={results[getRandom(19)]?.backdrop_path}
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