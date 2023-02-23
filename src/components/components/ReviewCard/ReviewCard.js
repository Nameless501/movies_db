import { POSTER_VERTICAL_SMALL } from '../../../utils/constants';
import avatarFallback from '../../../images/icon_photo_fallback.png';
import './ReviewCard.css';

function ReviewCard({ review }) {
    return (
        <article className='review-card' >
            <img
                src={POSTER_VERTICAL_SMALL + review?.author_details?.avatar_path}
                alt='Аватар пользователя'
                className='review-card__avatar'
                onError={(evt) => evt.target.src = avatarFallback}
            />
            <div className='review-card__review-wrapper' >
                <div className='review-card__review-header' >
                    <h3 className='review-card__author' >
                        {review?.author}
                    </h3>
                    <span className='review-card__date' >
                        {new Date(review?.created_at).toLocaleDateString('ru', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </span>
                </div>
                <p className='review-card__text' >
                    {review?.content}
                </p>
            </div>
        </article>
    );
}

export default ReviewCard;