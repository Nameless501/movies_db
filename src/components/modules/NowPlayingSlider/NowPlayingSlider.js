import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNowPlaying } from '../../../store/nowPlaying/nowPlayingSlice';
import { routesConfig } from '../../../utils/configs';
import SliderSmall from '../../components/SliderSmall/SliderSmall';
import SliderSmallWrapper from '../../components/SliderSmallWrapper/SliderSmallWrapper';

function NowPlayingSlider({ type = 'movies' }) {
    const { results } = useSelector(state => state.nowPlaying);
    const dispatch = useDispatch();

    // API fetch

    useEffect(() => {
        dispatch(fetchNowPlaying());
    }, [dispatch]);

    return (
        <SliderSmallWrapper
            title='Сейчас в кинотеатрах'
            link={routesConfig[type].nowPlaying}
        >
            <SliderSmall
                movies={results}
                type={type}
            />
        </SliderSmallWrapper>
    );
}

export default NowPlayingSlider;