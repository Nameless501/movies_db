import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTopRatedMovies } from '../../../store/topRatedMovies/topRatedMoviesSlice';
import { routesConfig } from '../../../utils/configs';
import MoviesSliderSmall from '../../components/MoviesSliderSmall/MoviesSliderSmall';
import MoviesSliderWrapper from '../../components/MoviesSliderWrapper/MoviesSliderWrapper';

function SliderTopRated() {
    const { movies } = useSelector(state => state.topRated);
    const dispatch = useDispatch();

    // API fetch

    useEffect(() => {
        dispatch(fetchTopRatedMovies());
    }, [dispatch]);

    return (
        <MoviesSliderWrapper
            title='Популярные фильмы'
            link={routesConfig.topRated}
        >
            <MoviesSliderSmall
                movies={movies}
            />
        </MoviesSliderWrapper>
    );
}

export default SliderTopRated;