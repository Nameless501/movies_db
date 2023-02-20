import { memo } from 'react';
import CardButton from '../../UI/CardButton/CardButton';
import MovieRating from '../../UI/MovieRating/MovieRating';
import { POSTER_HORIZONTAL_SMALL } from '../../../utils/constants';
import './MovieCard.css';

const MovieCard = memo(function MovieCard({ movie, place }) {
    return (
        <div
            className={`
                movie-card
                ${place && 'movie-card_place_' + place}
            `}
        >
            <figure className='movie-card__figure' >
                <img
                    src={POSTER_HORIZONTAL_SMALL + movie.poster_path}
                    alt='постер фильма'
                    className='movie-card__picture'
                />
                <figcaption className='movie-card__caption' >
                    <span className='movie-card__title' >
                        {movie.title}
                    </span>
                </figcaption>
            </figure>
            <div className='movie-card__wrapper'>
                <div className='movie-card__controls' >
                    <MovieRating
                        rating={movie.vote_average}
                    />
                    <CardButton
                        isActive={movie.id % 2 === 0}
                    />
                </div>
            </div>
        </div>
    );
})

export default MovieCard;