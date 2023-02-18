import { memo } from 'react';
import './MovieCard.css';

const MovieCard = memo(function MovieCard({ movie, handleClick, Button }) {
    const duration = movie.duration.toLocaleString('ru', {style: 'unit', unit: 'minute', unitDisplay: 'long'});

    return (
        <div className='movie-card' >
            <a
                href={movie.trailerLink}
                target='_blank'
                rel='noreferrer'
                className='movie-card__link-wrapper'
            >
                <figure className='movie-card__figure' >
                    <figcaption className='movie-card__caption' >
                        <span className='movie-card__title' >
                            {movie.nameRU}
                        </span>
                        <span className='movie-card__duration' >
                            {duration}
                        </span>
                    </figcaption>
                    <img
                        src={movie.image}
                        alt='постер фильма'
                        className='movie-card__picture'
                    />
                </figure>
            </a>
            <Button
                handleClick={handleClick}
            />
        </div>
    );
})

export default MovieCard;