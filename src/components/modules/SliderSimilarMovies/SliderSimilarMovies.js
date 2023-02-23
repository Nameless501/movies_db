import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchSimilarMovies } from '../../../store/similarMovies/similarMoviesSlice';
import MoviesSliderSmall from '../../components/MoviesSliderSmall/MoviesSliderSmall';
import MoviesSliderWrapper from '../../components/MoviesSliderWrapper/MoviesSliderWrapper';

function SliderSimilarMovies() {
    const { id } = useParams();
    const { movies } = useSelector(state => state.similarMovies);
    const dispatch = useDispatch();

    // API fetch

    useEffect(() => {
        dispatch(fetchSimilarMovies(id));
    }, [dispatch, id]);

    return (
        <MoviesSliderWrapper
            title='Похожие фильмы'
        >
            <MoviesSliderSmall
                movies={movies}
            />
        </MoviesSliderWrapper>
    );
}

export default SliderSimilarMovies;