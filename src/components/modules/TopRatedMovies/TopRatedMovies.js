import { useEffect, useLayoutEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTopRatedMovies, fetchMoreTopRatedMovies } from '../../../store/topRatedMovies/topRatedMoviesSlice';
import MoviesList from '../../components/MoviesList/MoviesList';
import MoreButton from '../../UI/MoreButton/MoreButton';
import ErrorMessage from '../../UI/ErrorMessage/ErrorMessage';
import './TopRatedMovies.css';

function TopRatedMovies() {
    const scrollRef = useRef(0);
    const { movies, loading, error } = useSelector(state => state.topRated);
    const dispatch = useDispatch();

    // API fetch

    useEffect(() => {
        dispatch(fetchTopRatedMovies());
    }, [dispatch]);

    function loadMoreMovies() {
        scrollRef.current = window.pageYOffset;
        dispatch(fetchMoreTopRatedMovies());
    }

    // restore scroll position after rerender movies list

    useLayoutEffect(() => {
        window.scrollTo(0, scrollRef.current);
    }, [movies])

    return (
        <section className='movies'>
            {(!loading && movies.length > 0) &&
                <>
                    <MoviesList
                        moviesList={movies}
                        userMoviesList={[]}
                    />
                    <MoreButton
                        handleClick={loadMoreMovies}
                    />
                </>
            }
            {(movies.length === 0 && error) &&
                <ErrorMessage
                    text={error}
                    place='movies'
                />
            }
        </section>
    );
}

export default TopRatedMovies;