import { useEffect, useLayoutEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies, fetchMoreMovies } from '../../../store/movies/moviesSlice';
import MoviesList from '../../components/MoviesList/MoviesList';
import MoreButton from '../../UI/MoreButton/MoreButton';
import Preloader from '../../UI/Preloader/Preloader';
import ErrorMessage from '../../UI/ErrorMessage/ErrorMessage';
import './TopRatedMovies.css';

function TopRatedMovies() {
    const scrollRef = useRef(0);
    const { movies: popular, loading, error } = useSelector(state => state.movies);
    const dispatch = useDispatch();

    // API fetch

    useEffect(() => {
        dispatch(fetchMovies());
    }, [dispatch]);

    function loadMoreMovies() {
        scrollRef.current = window.pageYOffset;
        dispatch(fetchMoreMovies());
    }

    // restore scroll position after rerender movies list

    useLayoutEffect(() => {
        window.scrollTo(0, scrollRef.current);
    }, [popular])

    return (
        <section className='movies'>
            {loading && <Preloader />}
            {(!loading && popular.length > 0) &&
                <>
                    <MoviesList
                        moviesList={popular}
                        userMoviesList={[]}
                    />
                    <MoreButton
                        handleClick={loadMoreMovies}
                    />
                </>
            }
            {(popular.length === 0 && error) &&
                <ErrorMessage
                    text={error}
                    place='movies'
                />
            }
        </section>
    );
}

export default TopRatedMovies;