import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {fetchTopRated} from '../../../store/topRated/topRatedSlice';
import { routesConfig } from '../../../utils/configs';
import SliderSmallWrapper from '../../components/SliderSmallWrapper/SliderSmallWrapper';
import PosterCard from '../../components/PosterCard/PosterCard';
import './TopRatedGrid.css';

function TopRatedGrid({ type }) {
    const { results, loading, error } = useSelector(state => state.topRated[type]);
    const dispatch = useDispatch();

    // API fetch

    useEffect(() => {
        dispatch(fetchTopRated(type));
    }, [dispatch, type]);

    return (
        <SliderSmallWrapper
            title='Сериалы с высоким рейтингом'
            link={routesConfig[type].popular}
            loading={loading}
        >
            <ul className='top-rated-grid'>
                {
                    results && [...results].sort((a,b) => b.vote_average - a.vote_average).slice(0, 7).map((show, index) => {
                        return (
                            <li
                                className={`top-rated-grid__item top-rated-grid__item_number_${index + 1}`}
                                key={show.id}
                            >
                                <PosterCard
                                    movie={show}
                                    type={type}
                                    orientation={ index < 2 ? 'horizontal' : 'vertical' }
                                />
                            </li>
                        )
                    })
                }
            </ul>
        </SliderSmallWrapper>
    );
}

export default TopRatedGrid;