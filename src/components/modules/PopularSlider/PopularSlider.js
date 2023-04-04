import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPopular } from '../../../store/popular/popularSlice';
import { routesConfig } from '../../../utils/configs';
import SliderSmall from '../../components/SliderSmall/SliderSmall';
import SliderSmallWrapper from '../../components/SliderSmallWrapper/SliderSmallWrapper';

function PopularSlider({ type = 'movies' }) {
    const { results, loading } = useSelector(state => state.popular[type]);
    const dispatch = useDispatch();

    // API fetch

    useEffect(() => {
        dispatch(fetchPopular(type));
    }, [dispatch, type]);

    return (
        <SliderSmallWrapper
            title={type === 'movies' ? 'Популярные фильмы' : 'Популяные сериалы'}
            link={routesConfig[type].popular}
            loading={loading}
        >
            <SliderSmall
                movies={results}
                type={type}
            />
        </SliderSmallWrapper>
    );
}

export default PopularSlider;