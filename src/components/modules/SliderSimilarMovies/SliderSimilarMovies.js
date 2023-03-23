import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchRecommendations } from '../../../store/recommendations/recommendationsSlice';
import MoviesSliderSmall from '../../components/MoviesSliderSmall/MoviesSliderSmall';
import MoviesSliderWrapper from '../../components/MoviesSliderWrapper/MoviesSliderWrapper';

function SliderSimilarMovies({ type = 'movies' }) {
    const { id } = useParams();
    const { recommendations } = useSelector(state => state.recommendations);
    const dispatch = useDispatch();

    // API fetch

    useEffect(() => {
        dispatch(fetchRecommendations({ type, id }));
    }, [dispatch, id, type]);

    return (
        <MoviesSliderWrapper
            title='Похожие фильмы'
        >
            <MoviesSliderSmall
                movies={recommendations}
                type={type}
            />
        </MoviesSliderWrapper>
    );
}

export default SliderSimilarMovies;