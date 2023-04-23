import { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import useResize from '../../../hooks/useResize';
import PosterImage from '../PosterImage/PosterImage';
import CardButtons from '../../modules/CardButtons/CardButtons';
import Rating from '../../UI/Rating/Rating';
import { routesConfig } from '../../../utils/configs';
import './PosterCard.css';

const PosterCard = memo(function MovieCard({ movie, place, type, orientation = 'vertical' }) {
    const [hover, setHover] = useState(false);
    const { isDesktop } = useResize();

    return (
        <Link
            to={routesConfig[type].info + '/' + movie.id}
            className='poster-card'
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <figure className='poster-card__figure' >
                <div
                    className={`
                        poster-card__poster-wrapper
                        ${hover && 'poster-card__poster-wrapper_hover'}
                    `}
                >
                    <PosterImage
                        src={orientation === 'vertical' ? movie.poster_path : movie.backdrop_path}
                        place='poster-card'
                        orientation={orientation}
                    />
                    {
                        isDesktop &&
                        <div
                            className={`
                                poster-card__poster-cover
                                ${hover && 'poster-card__poster-cover_hover'}
                            `}
                        >
                            <Rating
                                rating={movie.vote_average}
                            />
                            <div
                                className='poster-card__buttons-wrapper'
                                onClick={(evt) => evt.preventDefault()}
                            >
                                <CardButtons
                                    place='poster-card'
                                    id={movie.id}
                                    type={type}
                                />
                            </div>
                        </div>
                    }
                </div>
                <figcaption className='poster-card__caption' >
                    {movie.title ?? movie.name}
                </figcaption>
            </figure>
            {/* {
                isDesktop &&
                <div
                    className={`
                        poster-card__buttons-wrapper
                        ${hover && 'poster-card__buttons-wrapper_hover'}
                    `}
                >
                    <CardButtons
                        place='poster-card'
                        id={movie.id}
                        type={type}
                    />
                </div>
            } */}
        </Link>
    );
})

export default PosterCard;