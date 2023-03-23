import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNowPlaying } from '../../../store/nowPlaying/nowPlayingSlice';
import { routesConfig } from '../../../utils/configs';
import MoviesSliderSmall from '../../components/MoviesSliderSmall/MoviesSliderSmall';
import MoviesSliderWrapper from '../../components/MoviesSliderWrapper/MoviesSliderWrapper';

function SliderNowPlaying({ type = 'movies' }) {
    const { results } = useSelector(state => state.nowPlaying);
    const dispatch = useDispatch();

    // API fetch

    useEffect(() => {
        dispatch(fetchNowPlaying());
    }, [dispatch]);

    return (
        <MoviesSliderWrapper
            title='Сейчас в кинотеатрах'
            link={routesConfig[type].nowPlaying}
        >
            <MoviesSliderSmall
                movies={results}
                type={type}
            />
        </MoviesSliderWrapper>
    );
}

export default SliderNowPlaying;