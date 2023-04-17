import { useState } from 'react';
import AvatarImage from '../AvatarImage/AvatarImage';
import './ReviewCard.css';

function ReviewCard({ review }) {
    const [isOpen, setIsOpen] = useState(false);

    const reviewText = review?.content.split(' ');
    const isLongRead = reviewText.length > 75;

    function toggleComment() {
        setIsOpen(current => !current);
    }

    return (
        <article className='review-card' >
            <div className='review-card__avatar-wrapper'>
                <AvatarImage
                    src={review?.author_details?.avatar_path}
                    place="review"
                />
            </div>
            <div className='review-card__review-header' >
                <h3 className='review-card__author' >
                    {review?.author}
                </h3>
                <span className='review-card__date' >
                    {new Date(review?.created_at).toLocaleDateString('ru', { day: 'numeric', month: 'long', year: 'numeric' })}
                </span>
            </div>
            <div className='review-card__divider' />
            <p className='review-card__text' >
                {isLongRead ?
                    (isOpen ? review?.content : reviewText.slice(0, 75).join(' ') + '...')
                    :
                    review?.content
                }
            </p>
            {isLongRead &&
                <button
                    className={`
                            review-card__button
                            ${isOpen && 'review-card__button_active'}
                        `}
                    onClick={toggleComment}
                />
            }
        </article>
    );
}

export default ReviewCard;