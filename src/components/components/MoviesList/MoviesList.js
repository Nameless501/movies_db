import MoviesListWrapper from '../MoviesListWrapper/MoviesListWrapper';
import MovieCard from '../MovieCard/MovieCard';
import CardButton from '../../UI/CardButton/CardButton';
import CardButtonSaved from '../../UI/CardButtonSaved/CardButtonSaved';
import { getMovieId } from '../../../utils/utils';

function MoviesList({ moviesList, userMoviesList, handleMovieSave, handleMovieDelete }) {
    return (
        <MoviesListWrapper >
            {moviesList.map(currentMovie => {
                const movieId = getMovieId(currentMovie, userMoviesList);

                const isOwn = userMoviesList.some(savedMovie => savedMovie.movieId === currentMovie.movieId);

                const handleDelete = handleMovieDelete.bind(null, movieId);
                const handleSave = handleMovieSave.bind(null, currentMovie);

                return (
                    <li key={currentMovie.movieId} >
                        <MovieCard
                            movie={currentMovie}
                            Button={isOwn ? CardButtonSaved : CardButton}
                            handleClick={isOwn ? handleDelete : handleSave}
                        />
                    </li>
                )
            })
            }
        </MoviesListWrapper>
    );
}

export default MoviesList;