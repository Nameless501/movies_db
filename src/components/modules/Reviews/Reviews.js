import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchReviews, fetchMoreReviews } from '../../../store/reviews/reviewsSlice';
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import ButtonMain from '../../UI/ButtonMain/ButtonMain';
import PreloaderSmall from '../../UI/PreloaderSmall/PreloaderSmall';
import './Reviews.css';

function Reviews({ type }) {
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
        <section className="reviews" >
            <h2 className="reviews__title" >
                Рецензии
            </h2>
            <div className='reviews__wrapper'>
                {
                    loading === 'fulfilled' &&
                        <>
                            <ul className="reviews__list" >
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
                                (reviews?.length > 0 && currentPage < totalPages) &&
                                <ButtonMain
                                    handleClick={handleLoadMore}
                                    place='reviews'
                                    text='Еще'
                                />
                            }
                        </>
                }
                {
                    loading === 'pending' &&
                        <PreloaderSmall
                            place='reviews'
                        />
                }
            </div>
            {
                (reviews?.length === 0 && !error) &&
                <p className="reviews__empty-message" >
                    Рецензий пока нет.
                </p>
            }
        </section>
    );
}

export default Reviews;