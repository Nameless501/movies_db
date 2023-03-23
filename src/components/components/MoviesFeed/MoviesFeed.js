import MoviesList from '../../components/MoviesList/MoviesList';
import MoreButton from '../../UI/MoreButton/MoreButton';
import ErrorMessage from '../../UI/ErrorMessage/ErrorMessage';
import './MoviesFeed.css';

function MoviesFeed({ movies, loading, error, handleLoadMore, currentPage, totalPages, type }) {
    return (
        <section className='movies-feed'>
            {
                (!loading && movies.length > 0) &&
                    <div className='movies-feed__movies-list' >
                        <MoviesList
                            moviesList={movies}
                            type={type}
                        />
                    </div>
            }
            {
                (movies.length > 0 && currentPage < totalPages) &&
                    <div className='movies-feed__more-button' >
                        <MoreButton
                            handleClick={handleLoadMore}
                        />
                    </div>
            }
            {
                (movies.length === 0 && error) &&
                    <ErrorMessage
                        text={error}
                        place='movies'
                    />
            }
        </section >
    );
}

export default MoviesFeed;