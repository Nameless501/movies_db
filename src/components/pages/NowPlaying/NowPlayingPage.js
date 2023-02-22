import { useSelector } from 'react-redux';
import NowPlayingMovies from '../../modules/NowPlayingMovies/NowPlayingMovies';
import MoviesPageWrapper from '../../components/MoviesPageWrapper/MoviesPageWrapper';

function NowPlayingPage() {
    const { movies } = useSelector(store => store.nowPlaying);

    function getRandom(max) {
        return Math.floor(Math.random() * max);
    }

    return (
        <MoviesPageWrapper
            title='Сейчас в прокате'
            poster={movies[getRandom(19)]?.backdrop_path}
        >
            <NowPlayingMovies />
        </MoviesPageWrapper>
    );
}

export default NowPlayingPage;