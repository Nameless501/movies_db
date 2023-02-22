import MovieCard from '../MovieCard/MovieCard';
import './MoviesList.css';

function MoviesList({ moviesList }) {
    return (
        <ul className='movies-list' >
            {
                moviesList.map(currentMovie => {
                    return (
                        <li key={currentMovie.id} >
                            <MovieCard
                                movie={currentMovie}
                            />
                        </li>
                    )
                })
            }
        </ul>
    );
}

export default MoviesList;