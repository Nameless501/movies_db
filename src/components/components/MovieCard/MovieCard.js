import { memo } from 'react';
import CardButton from '../../UI/CardButton/CardButton';
import MovieRating from '../../UI/MovieRating/MovieRating';
import { POSTER_HORIZONTAL_SMALL } from '../../../utils/constants';
import './MovieCard.css';

const MovieCard = memo(function MovieCard({ movie }) {
    return (
        <div className='movie-card' >
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
            <CardButton
                isActive={movie.id % 2 === 0}
            />
            <MovieRating
                rating={movie.vote_average}
                place='movie-card'
            />
        </div>
    );
})

export default MovieCard;