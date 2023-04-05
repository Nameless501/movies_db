import { POSTER_VERTICAL_SMALL } from '../../../utils/constants';
import { handleAvatarFetchError } from '../../../utils/utils';
import './ActorCard.css';

function ActorCard({ actor }) {
    return (
        <figure className='actor-card' >
            <img
                src={POSTER_VERTICAL_SMALL + actor?.profile_path}
                alt='Фото актера'
                className='actor-card__photo'
                onError={handleAvatarFetchError}
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