import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTopRated } from '../../../store/topRated/topRatedSlice';
import { routesConfig } from '../../../utils/configs';
import SliderSmall from '../../components/SliderSmall/SliderSmall';
import SliderSmallWrapper from '../../components/SliderSmallWrapper/SliderSmallWrapper';

function TopRatedSlider({ type = 'movies' }) {
    const { results } = useSelector(state => state.topRated[type]);
    const dispatch = useDispatch();

    // API fetch

    useEffect(() => {
        dispatch(fetchTopRated(type));
    }, [dispatch, type]);

    return (
        <SliderSmallWrapper
            title='Фильмы с высоким рейтингом'
            link={routesConfig[type].topRated}
        >
            <SliderSmall
                movies={results}
                type={type}
            />
        </SliderSmallWrapper>
    );
}

export default TopRatedSlider;