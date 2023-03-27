import { memo } from 'react';
import { Link } from 'react-router-dom';
import CardButtons from '../CardButtons/CardButtons';
import Rating from '../../UI/Rating/Rating';
import { POSTER_VERTICAL_SMALL } from '../../../utils/constants';
import { routesConfig } from '../../../utils/configs';
import posterFallback from '../../../images/poster_fallback.png';
import './PosterCard.css';

const PosterCard = memo(function MovieCard({ movie, place, type = 'movies', vertical = true }) {
    return (
        <div
            className={`
                poster-card
                poster-card_${vertical ? 'vertical' : 'horizontal'}
            `}
        >
            <figure className='poster-card__figure' >
                <div className='poster-card__poster-wrapper' >
                    <img
                        src={vertical ? POSTER_VERTICAL_SMALL + movie.poster_path : POSTER_VERTICAL_SMALL + movie.backdrop_path}
                        alt='постер фильма'
                        className='poster-card__poster'
                        onError={(evt) => evt.target.src = posterFallback}
                    />
                </div>
                <figcaption className='poster-card__caption' >
                    <span className='poster-card__title' >
                        {movie.title ?? movie.name}
                    </span>
                </figcaption>
            </figure>
            <Link
                to={routesConfig[type].info + '/' + movie.id}
                className='poster-card__link-wrapper'
            />
            <div className='poster-card__rating-wrapper' >
                <Rating
                    rating={movie.vote_average}
                />
            </div>
            <div className='poster-card__button-wrapper' >
                <CardButtons
                    place='poster-card'
                    id={movie.id}
                    type={type}
                />
            </div>
        </div>
    );
})

export default PosterCard;