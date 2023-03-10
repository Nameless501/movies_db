import { memo } from 'react';
import { Link } from 'react-router-dom';
import CardButton from '../../UI/CardButton/CardButton';
import MovieRating from '../../UI/MovieRating/MovieRating';
import { POSTER_HORIZONTAL_SMALL } from '../../../utils/constants';
import { routesConfig } from '../../../utils/configs';
import posterFallback from '../../../images/poster_fallback.png';
import './MovieCard.css';

const MovieCard = memo(function MovieCard({ movie, place }) {
    return (
        <div className='movie-card'>
            <figure className='movie-card__figure' >
                <div className='movie-card__poster-wrapper' >
                    <img
                        src={POSTER_HORIZONTAL_SMALL + movie.poster_path}
                        alt='постер фильма'
                        className='movie-card__poster'
                        onError={(evt) => evt.target.src = posterFallback}
                    />
                </div>
                <figcaption className='movie-card__caption' >
                    <span className='movie-card__title' >
                        {movie.title}
                    </span>
                </figcaption>
            </figure>
            <Link
                to={routesConfig.movieInfo + '/' + movie.id}
                className='movie-card__link-wrapper'
            />
            <div className='movie-card__rating-wrapper' >
                <MovieRating
                    rating={movie.vote_average}
                />
            </div>
            <div className='movie-card__button-wrapper' >
                <CardButton
                    isActive={movie.id % 3 === 0}
                />
            </div>
        </div>
    );
})

export default MovieCard;