import CardsList from '../CardsList/CardsList';
import MoreButton from '../../UI/MoreButton/MoreButton';
import ErrorMessage from '../../UI/ErrorMessage/ErrorMessage';
import './CardsFeed.css';

function CardsFeed({ movies, loading, error, handleLoadMore, currentPage, totalPages, type }) {
    return (
        <section className='cards-feed'>
            {
                (!loading && movies.length > 0) &&
                    <div className='cards-feed__movies-list' >
                        <CardsList
                            moviesList={movies}
                            type={type}
                        />
                    </div>
            }
            {
                (movies.length > 0 && currentPage < totalPages) &&
                    <div className='cards-feed__more-button' >
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

export default CardsFeed;