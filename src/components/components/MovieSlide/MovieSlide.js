import MovieRating from '../../UI/MovieRating/MovieRating';
import { POSTER_HORIZONTAL_ORIGINAL } from '../../../utils/constants';
import './MovieSlide.css';

function MovieSlide({ title, backdrop_path, overview, vote_average, release_date }) {
    const release = new Date(release_date);

    return (
        <div
            className='movie-slide'
            style={{ backgroundImage: `url(${POSTER_HORIZONTAL_ORIGINAL + backdrop_path})` }}
        >
            <div className='movie-slide__content-wrapper'>
                <h2 className='movie-slide__title' >
                    {title}
                </h2>
                <div className='movie-slide__info'>
                    <span className='movie-slide__release-date' >
                        {release.getFullYear()}
                    </span>
                    <MovieRating
                        rating={vote_average}
                    />
                </div>
                <p className='movie-slide__description' >
                    {overview}
                </p>
                <button
                    className='movie-slide__button'
                    type='button'
                >
                    Подробнее
                </button>
            </div>
        </div>
    );
}

export default MovieSlide;