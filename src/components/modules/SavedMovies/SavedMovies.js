import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserMovies, deleteUserMovie } from '../../../store/userMovies/userMoviesSlice';
import Preloader from '../../UI/Preloader/Preloader';
import UserMoviesList from '../../components/UserMoviesList/UserMoviesList';
import ErrorMessage from '../../UI/ErrorMessage/ErrorMessage';
import './SavedMovies.css';

function SavedMovies() {
    const { result, loading, error } = useSelector(state => state.userMovies);
    const dispatch = useDispatch();

    // API fetch

    useEffect(() => {
        dispatch(fetchUserMovies());
    }, [dispatch]);

    // delete cards handler

    function handleMovieDelete(id) {
        dispatch(deleteUserMovie(id));
    };

    return (
        <section className='saved-movies'>
            {loading && <Preloader />}
            {(!loading && result.length > 0) &&
                <UserMoviesList
                    moviesList={result}
                    handleMovieDelete={handleMovieDelete}
                />
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

export default SavedMovies;