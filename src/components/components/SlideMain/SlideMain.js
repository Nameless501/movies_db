import Rating from '../../UI/Rating/Rating';
import LinkButton from '../../UI/LinkButton/LinkButton';
import CardButtons from '../CardButtons/CardButtons'
import { POSTER_HORIZONTAL_ORIGINAL } from '../../../utils/constants';
import { routesConfig } from '../../../utils/configs';
import './SlideMain.css';

function SlideMain({ title, backdrop_path, overview, vote_average, release_date, id }) {
    const release = new Date(release_date);

    const styles = {
        '--image_url': `url(${POSTER_HORIZONTAL_ORIGINAL + backdrop_path})`
    }

    return (
        <div
            className='slide-main'
            style={styles}
        >
            <div className='slide-main__content-wrapper'>
                <h2 className='slide-main__title' >
                    {title}
                </h2>
                <div className='slide-main__info'>
                    <span className='slide-main__release-date' >
                        {release.getFullYear()}
                    </span>
                    <Rating
                        rating={vote_average}
                    />
                </div>
                <p className='slide-main__description' >
                    {overview}
                </p>
                <CardButtons
                    place='slide-main'
                    id={id}
                    type='movies'
                />
                <LinkButton
                    link={routesConfig.movies.info + '/' + id}
                    text='Подробнее'
                    place='slide-main'
                />
            </div>
        </div>
    );
}

export default SlideMain;