import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTopRated } from '../../../store/topRated/topRatedSlice';
import { routesConfig } from '../../../utils/configs';
import MoviesSliderSmall from '../../components/MoviesSliderSmall/MoviesSliderSmall';
import MoviesSliderWrapper from '../../components/MoviesSliderWrapper/MoviesSliderWrapper';

function SliderTopRated({ type = 'movies' }) {
    const { results } = useSelector(state => state.topRated);
    const dispatch = useDispatch();

    // API fetch

    useEffect(() => {
        dispatch(fetchTopRated(type));
    }, [dispatch, type]);

    return (
        <MoviesSliderWrapper
            title='Популярные фильмы'
            link={routesConfig[type].topRated}
        >
            <MoviesSliderSmall
                movies={results}
                type={type}
            />
        </MoviesSliderWrapper>
    );
}

export default SliderTopRated;