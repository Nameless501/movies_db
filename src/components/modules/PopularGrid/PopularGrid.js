import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPopular } from '../../../store/popular/popularSlice';
import { routesConfig } from '../../../utils/configs';
import SliderSmallWrapper from '../../components/SliderSmallWrapper/SliderSmallWrapper';
import PosterCard from '../../components/PosterCard/PosterCard';
import './PopularGrid.css';

function PopularGrid({ type }) {
    const { results, loading, error } = useSelector(state => state.popular);
    const dispatch = useDispatch();

    // API fetch

    useEffect(() => {
        dispatch(fetchPopular(type));
    }, [dispatch, type]);

    useEffect(() => {
        console.log(results);
    }, [results]);

    return (
        <SliderSmallWrapper
            title='Популярные сериалы'
            link={routesConfig[type].popular}
        >
            <ul className='popular-grid'>
                {
                    results?.slice(0, 7).map((show, index) => {
                        return (
                            <li
                                className={`popular-grid__item popular-grid__item_number_${index + 1}`}
                                key={show.id}
                            >
                                <PosterCard
                                    movie={show}
                                    type={type}
                                    vertical={index < 2 ? false : true}
                                />
                            </li>
                        )
                    })
                }
            </ul>
        </SliderSmallWrapper>
    );
}

export default PopularGrid;