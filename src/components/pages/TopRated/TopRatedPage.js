import { useSelector } from 'react-redux';
import TopRatedMovies from '../../modules/TopRatedMovies/TopRatedMovies';
import MoviesPageWrapper from '../../components/MoviesPageWrapper/MoviesPageWrapper';

function TopRatedPage() {
    const { movies } = useSelector(store => store.topRated);

    function getRandom(max) {
        return Math.floor(Math.random() * max);
    }

    return (
        <MoviesPageWrapper
            title='Популярные фильмы'
            poster={movies[getRandom(19)]?.backdrop_path}
        >
            <TopRatedMovies />
        </MoviesPageWrapper>
    );
}

export default TopRatedPage;