import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies } from '../../../store/movies/moviesSlice';
import { routesConfig } from '../../../utils/configs';
import MoviesSliderSmall from '../../components/MoviesSliderSmall/MoviesSliderSmall';
import MoviesSliderWrapper from '../../components/MoviesSliderWrapper/MoviesSliderWrapper';

function SliderTopRated() {
    const { movies } = useSelector(state => state.movies);
    const dispatch = useDispatch();

    // API fetch

    useEffect(() => {
        dispatch(fetchMovies());
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