import MovieCard from '../MovieCard/MovieCard';
import './MoviesList.css';

function MoviesList({ moviesList, type }) {
    return (
        <ul className='movies-list' >
            {
                moviesList.map(currentMovie => {
                    return (
                        <li key={currentMovie.id} >
                            <MovieCard
                                movie={currentMovie}
                                type={type}
                            />
                        </li>
                    )
                })
            }
        </ul>
    );
}

export default MoviesList;