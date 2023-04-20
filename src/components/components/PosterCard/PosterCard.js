import { memo } from 'react';
import { Link } from 'react-router-dom';
import useResize from '../../../hooks/useResize';
import useImageLoad from '../../../hooks/useImageLoad';
import CardButtons from '../../modules/CardButtons/CardButtons';
import Rating from '../../UI/Rating/Rating';
import { POSTER_VERTICAL_SMALL } from '../../../utils/constants';
import { routesConfig } from '../../../utils/configs';
import posterFallback from '../../../images/poster_fallback.png';
import './PosterCard.css';

const PosterCard = memo(function MovieCard({ movie, place, type, vertical = true }) {
    const { isDesktop } = useResize();
    const { imageState, checkImageLoading } = useImageLoad();

    return (
        <div
            className={`
                poster-card
                poster-card_${vertical ? 'vertical' : 'horizontal'}
            `}
        >
            <figure className='poster-card__figure' >
                <div
                    className='poster-card__poster-wrapper'
                    style={{'backgroundImage': `url(${ imageState !== 'loaded' && posterFallback })`}}
                >
                    <img
                        src={vertical ? POSTER_VERTICAL_SMALL + movie.poster_path : POSTER_VERTICAL_SMALL + movie.backdrop_path}
                        alt='постер фильма'
                        className='poster-card__poster'
                        style={{'display': `${ imageState === 'loaded' && 'block'}`}}
                        onLoad={checkImageLoading}
                    />
                </div>
                <figcaption className='poster-card__caption' >
                    {
                        isDesktop &&
                        <>
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
                        </>
                    }
                    <span className='poster-card__title' >
                        {movie.title ?? movie.name}
                    </span>
                    <Link
                        to={routesConfig[type].info + '/' + movie.id}
                        className='poster-card__link-wrapper'
                    />
                </figcaption>
            </figure>
        </div>
    );
})

export default PosterCard;