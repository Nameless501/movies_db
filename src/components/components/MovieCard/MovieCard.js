import { memo } from 'react';
import CardButton from '../../UI/CardButton/CardButton';
import './MovieCard.css';

const MovieCard = memo(function MovieCard({ movie }) {
    return (
        <div className='movie-card' >
            <figure className='movie-card__figure' >
                <img
                    src={'https://image.tmdb.org/t/p/w500/' + movie.backdrop_path}
                    alt='постер фильма'
                    className='movie-card__picture'
                />
                <figcaption className='movie-card__caption' >
                    <span className='movie-card__title' >
                        {movie.title}
                    </span>
                    <span className='movie-card__vote' >
                        {movie.vote_average}
                    </span>
                </figcaption>
            </figure>
            <CardButton
                isActive={movie.id % 2 === 0}
            />
        </div>
    );
})

export default MovieCard;