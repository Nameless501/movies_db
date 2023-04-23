import { memo } from 'react';
import { Link } from 'react-router-dom';
import useResize from '../../../hooks/useResize';
import PosterImage from '../PosterImage/PosterImage';
import CardButtons from '../../modules/CardButtons/CardButtons';
import Rating from '../../UI/Rating/Rating';
import { routesConfig } from '../../../utils/configs';
import './PosterCard.css';

const PosterCard = memo(function MovieCard({ movie, place, type, orientation = 'vertical' }) {
    const { isDesktop } = useResize();

    return (
        <div
            className={`
                poster-card
                poster-card_orientation_${orientation}
            `}
        >
            <figure className='poster-card__figure' >
                <PosterImage
                    src={orientation === 'vertical' ? movie.poster_path : movie.backdrop_path}
                    place='poster-card'
                />
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