import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNowPlayingMovies } from '../../../store/nowPlayingMovies/nowPlayingMoviesSlice';
import { routesConfig } from '../../../utils/configs';
import MoviesSliderSmall from '../../components/MoviesSliderSmall/MoviesSliderSmall';
import MoviesSliderWrapper from '../../components/MoviesSliderWrapper/MoviesSliderWrapper';

function PopularShowsGrid() {
    const { movies } = useSelector(state => state.nowPlaying);
    const dispatch = useDispatch();

    // API fetch

    useEffect(() => {
        dispatch(fetchNowPlayingMovies());
    }, [dispatch]);

    return (
        <MoviesSliderWrapper
            title='Сейчас в кинотеатрах'
            link={routesConfig.nowPlaying}
        >
            <MoviesSliderSmall
                movies={movies}
            />
        </MoviesSliderWrapper>
    );
}

export default PopularShowsGrid;