import MoviesListWrapper from '../MoviesListWrapper/MoviesListWrapper';
import MovieCard from '../MovieCard/MovieCard';
import CardButtonDelete from '../../UI/CardButtonDelete/CardButtonDelete';

function UserMoviesList({ moviesList, handleMovieDelete }) {
    return (
        <MoviesListWrapper >
            {moviesList.map(currentMovie => {
                const handleDelete = handleMovieDelete.bind(null, currentMovie._id);

                return (
                    <li key={currentMovie._id} >
                        <MovieCard
                            movie={currentMovie}
                            Button={CardButtonDelete}
                            handleClick={handleDelete}
                        />
                    </li>
                )
            })
            }
        </MoviesListWrapper>
    );
}

export default UserMoviesList;