import { POSTER_VERTICAL_SMALL } from '../../../utils/constants';
import useImageLoad from '../../../hooks/useImageLoad';
import photoFallback from '../../../images/icon_photo_fallback.png';
import './ActorCard.css';

function ActorCard({ actor }) {
    const { imageState, checkImageLoading } = useImageLoad();

    return (
        <figure className='actor-card' >
            <div
                className='actor-card__photo-wrapper'
                style={{'backgroundImage': `url(${ imageState !== 'loaded' && photoFallback })`}}
            >
                <img
                    src={POSTER_VERTICAL_SMALL + actor?.profile_path}
                    alt='Фото актера'
                    className='actor-card__photo'
                    style={{'display': `${ imageState === 'loaded' && 'block'}`}}
                    onLoad={checkImageLoading}
                />
            </div>
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