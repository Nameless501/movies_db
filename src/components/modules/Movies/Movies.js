import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies } from '../../../store/movies/moviesSlice';
import { fetchUserMovies, saveUserMovie, deleteUserMovie } from '../../../store/userMovies/userMoviesSlice';
import useMoviesCardsRender from '../../../hooks/useMoviesCardsRender';
import MoviesList from '../../components/MoviesList/MoviesList';
import MoreButton from '../../UI/MoreButton/MoreButton';
import Preloader from '../../UI/Preloader/Preloader';
import ErrorMessage from '../../UI/ErrorMessage/ErrorMessage';
import './Movies.css';

function Movies() {
    const { result, loading, error } = useSelector(state => state.movies);
    const { movies } = useSelector(state => state.userMovies);
    const { renderedMovies, showMoreMovies, renderButton } = useMoviesCardsRender(result);
    const dispatch = useDispatch();

    // API fetch

    useEffect(() => {
        dispatch(fetchMovies());
        dispatch(fetchUserMovies());
    }, [dispatch]);

    // save and delete cards handlers

    function handleMovieSave(movieData) {
        dispatch(saveUserMovie(movieData));
    }

    function handleMovieDelete(id) {
        dispatch(deleteUserMovie(id));
    }

    return (
        <section className='movies'>
            {loading && <Preloader />}
            {(!loading && renderedMovies.length > 0) &&
                <>
                    <MoviesList
                        moviesList={renderedMovies}
                        userMoviesList={movies}
                        handleMovieSave={handleMovieSave}
                        handleMovieDelete={handleMovieDelete}
                    />
                    {renderButton &&
                        <MoreButton
                            handleClick={showMoreMovies}
                        />
                    }
                </>
            }
            {(result.length === 0 && error) &&
                <ErrorMessage
                    text={error}
                    place='movies'
                />
            }
        </section>
    );
}

export default Movies;