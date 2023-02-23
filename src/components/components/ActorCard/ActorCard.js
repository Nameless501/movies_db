import { POSTER_VERTICAL_SMALL } from '../../../utils/constants';
import photoFallback from '../../../images/icon_photo_fallback.png';
import './ActorCard.css';

function ActorCard({ actor }) {
    return (
        <figure className='actor-card' >
            <img
                src={POSTER_VERTICAL_SMALL + actor?.profile_path}
                alt='Фото актера'
                className='actor-card__photo'
                onError={(evt) => evt.target.src = photoFallback}
            />
            <figcaption className='actor-card__caption' >
                <p className='actor-card__name'>
                    {actor?.name}
                </p>
                <p className='actor-card__character'>
                    {actor?.character}
                </p>
            </figcaption>
        </figure>
    );
}

export default ActorCard;