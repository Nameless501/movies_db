import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchReviews } from '../../../store/reviews/reviewsSlice';
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import './MovieReviews.css';

function MovieReviews() {
    const { id } = useParams();
    const { reviews } = useSelector(state => state.reviews);
    const dispatch = useDispatch();

    // API fetch

    useEffect(() => {
        dispatch(fetchReviews(id));
    }, [dispatch, id]);

    return (
        <section className="movie-reviews" >
            <h2 className="movie-reviews__title" >
                Рецензии
            </h2>
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
        </section>
    );
}

export default MovieReviews;