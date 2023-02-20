import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNowPlayingMovies } from '../../../store/nowPlayingMovies/nowPlayingMoviesSlice';
import { routesConfig } from '../../../utils/configs';
import MoviesSliderSmall from '../../components/MoviesSliderSmall/MoviesSliderSmall';
import MoviesSliderWrapper from '../../components/MoviesSliderWrapper/MoviesSliderWrapper';

function SliderNowPlaying() {
    const { movies } = useSelector(state => state.nowPlaying);
    const dispatch = useDispatch();

    // API fetch

    useEffect(() => {
        dispatch(fetchNowPlayingMovies());
    }, [dispatch]);

    return (
        <MoviesSliderWrapper
            title='Сейчас в кинотеатрах'
            link={routesConfig.topRated}
        >
            <MoviesSliderSmall
                movies={movies}
            />
        </MoviesSliderWrapper>
    );
}

export default SliderNowPlaying;