import useResize from '../../../hooks/useResize';
import CardsList from '../CardsList/CardsList';
import MoreButton from '../../UI/MoreButton/MoreButton';
import ErrorMessage from '../../UI/ErrorMessage/ErrorMessage';
import './CardsFeed.css';

function CardsFeed({ movies, loading, error, handleLoadMore, currentPage, totalPages, type }) {
    const { isDesktop, isTablet } = useResize();
    const columnsCount = isDesktop ? 5 : isTablet ? 4 : 2;

    return (
        <section className='cards-feed'>
            {
                (loading === 'fulfilled') &&
                    <div className='cards-feed__movies-list' >
                        <CardsList
                            moviesList={movies}
                            type={type}
                        />
                    </div>
            }
            {
                (loading === 'fulfilled' && currentPage < totalPages) &&
                    <div
                        className='cards-feed__more-button'
                        style={{'height': `${100 / (movies.length / columnsCount)}%`}}  // get dynamic size of last row in %
                    >
                        <MoreButton
                            handleClick={handleLoadMore}
                        />
                    </div>
            }
            {
                (loading === 'rejected') &&
                    <ErrorMessage
                        text={error}
                        place='movies'
                    />
            }
        </section >
    );
}

export default CardsFeed;