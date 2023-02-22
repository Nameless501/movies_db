import MovieRating from '../../UI/MovieRating/MovieRating';
import LinkButton from '../../UI/LinkButton/LinkButton';
import { POSTER_HORIZONTAL_ORIGINAL } from '../../../utils/constants';
import { routesConfig } from '../../../utils/configs';
import './MovieSlide.css';

function MovieSlide({ title, backdrop_path, overview, vote_average, release_date, id }) {
    const release = new Date(release_date);

    const styles = {
        '--image_url': `url(${POSTER_HORIZONTAL_ORIGINAL + backdrop_path})`
    }

    return (
        <div
            className='movie-slide'
            style={styles}
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
                <LinkButton
                    link={routesConfig.movieInfo + '/' + id}
                    text='Подробнее'
                    place='slider-main'
                />
            </div>
        </div>
    );
}

export default MovieSlide;