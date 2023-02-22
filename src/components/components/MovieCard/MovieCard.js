import { memo } from 'react';
import CardButton from '../../UI/CardButton/CardButton';
import MovieRating from '../../UI/MovieRating/MovieRating';
import LinkButton from '../../UI/LinkButton/LinkButton';
import { POSTER_HORIZONTAL_SMALL } from '../../../utils/constants';
import { routesConfig } from '../../../utils/configs';
import './MovieCard.css';

const MovieCard = memo(function MovieCard({ movie, place }) {
    return (
        <figure className='movie-card' >
            <div className='movie-card__poster-wrapper' >
                <img
                    src={POSTER_HORIZONTAL_SMALL + movie.poster_path}
                    alt='постер фильма'
                    className='movie-card__poster'
                />
            </div>
            <figcaption className='movie-card__caption' >
                <div className='movie-card__controls' >
                    <MovieRating
                        rating={movie.vote_average}
                    />
                    <CardButton
                        isActive={movie.id % 2 === 0}
                    />
                </div>
                <span className='movie-card__title' >
                    {movie.title}
                </span>
                <div className='movie-card__link-button' >
                    <LinkButton
                        link={routesConfig.movieInfo + '/' + movie.id}
                        place='movie-card'
                        text='Подробнее'
                    />
                </div>
            </figcaption>
        </figure>
    );
})

export default MovieCard;