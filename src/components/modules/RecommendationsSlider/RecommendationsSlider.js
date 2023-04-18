import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchRecommendations } from '../../../store/recommendations/recommendationsSlice';
import SliderSmall from '../../components/SliderSmall/SliderSmall';
import SliderSmallWrapper from '../../components/SliderSmallWrapper/SliderSmallWrapper';

function RecommendationsSlider({ type }) {
    const { id } = useParams();
    const { recommendations, loading, error } = useSelector(state => state.recommendations);
    const dispatch = useDispatch();

    // API fetch

    useEffect(() => {
        dispatch(fetchRecommendations({ type, id }));
    }, [dispatch, id, type]);

    return (
        <SliderSmallWrapper
            title='Похожие фильмы'
            loading={loading}
            error={error}
        >
            <SliderSmall
                movies={recommendations}
                type={type}
            />
        </SliderSmallWrapper>
    );
}

export default RecommendationsSlider;