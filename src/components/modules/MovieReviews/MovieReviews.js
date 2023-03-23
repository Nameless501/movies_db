import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchReviews, fetchMoreReviews } from '../../../store/reviews/reviewsSlice';
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import MoreButton from '../../UI/MoreButton/MoreButton';
import './MovieReviews.css';

function MovieReviews({ type = 'movies' }) {
    const { id } = useParams();
    const { reviews, loading, error, currentPage, totalPages } = useSelector(state => state.reviews);
    const dispatch = useDispatch();

    // API fetch

    useEffect(() => {
        dispatch(fetchReviews({ type, id }));
    }, [dispatch, id, type]);

    function handleLoadMore() {
        dispatch(fetchMoreReviews({ type, id }));
    }

    return (
        <section className="movie-reviews" >
            <h2 className="movie-reviews__title" >
                Рецензии
            </h2>
            <div className='movie-reviews__reviews-wrapper'>
                <ul className="movie-reviews__reviews-list" >
                    {
                        reviews?.map(review => {
                            return (
                                <li key={review.id} >
                                    <ReviewCard review={review} />
                                </li>
                            )
                        })
                    }
                </ul>
                {
                    (reviews.length > 0 && currentPage < totalPages) &&
                    <MoreButton
                        handleClick={handleLoadMore}
                        place='reviews'
                    />
                }
            </div>
            {
                (reviews.length === 0 && !error) &&
                <p className="movie-reviews__empty-message" >
                    Рецензий пока нет.
                </p>
            }
        </section>
    );
}

export default MovieReviews;