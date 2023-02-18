import MoviesListWrapper from '../MoviesListWrapper/MoviesListWrapper';
import MovieCard from '../MovieCard/MovieCard';

function MoviesList({ moviesList }) {
    return (
        <MoviesListWrapper >
            {moviesList.map(currentMovie => {
                return (
                    <li key={currentMovie.id} >
                        <MovieCard
                            movie={currentMovie}
                        />
                    </li>
                )
            })
            }
        </MoviesListWrapper>
    );
}

export default MoviesList;