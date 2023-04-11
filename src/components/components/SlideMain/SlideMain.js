import { useRef, useState } from 'react';
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';
import Rating from '../../UI/Rating/Rating';
import LinkButton from '../../UI/LinkButton/LinkButton';
import CardButtons from '../CardButtons/CardButtons';
import PosterLazyLoad from '../PosterLazyLoad/PosterLazyLoad';
import { routesConfig } from '../../../utils/configs';
import './SlideMain.css';

function SlideMain({ title, backdrop_path, poster_path, overview, vote_average, release_date, id }) {
    const slideRef = useRef();
    const [slideIsVisible, setSlideIsVisible] = useState(false);

    // load posters only when slide visible

    useIntersectionObserver(
        slideRef,
        ([{ isIntersecting }], observerElement) => {
            if (isIntersecting) {
                setSlideIsVisible(true);
                observerElement.unobserve(slideRef.current);
            }
        }
    );

    const release = new Date(release_date);

    return (
        <div
            className='slide-main'
            ref={slideRef}
        >
            {
                slideIsVisible &&
                <PosterLazyLoad
                    posterVertical={poster_path}
                    posterHorizontal={backdrop_path}
                />
            }
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