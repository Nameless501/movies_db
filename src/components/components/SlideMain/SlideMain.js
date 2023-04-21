import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';
import useResize from '../../../hooks/useResize';
import Rating from '../../UI/Rating/Rating';
import ButtonMain from '../../UI/ButtonMain/ButtonMain';
import CardButtons from '../../modules/CardButtons/CardButtons';
import PosterLazyLoad from '../PosterLazyLoad/PosterLazyLoad';
import { routesConfig } from '../../../utils/configs';
import './SlideMain.css';

function SlideMain({ title, backdrop_path, poster_path, overview, vote_average, release_date, id, type }) {
    const slideRef = useRef();
    const [slideIsVisible, setSlideIsVisible] = useState(false);
    const { isMobile } = useResize();

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
            <PosterLazyLoad
                posterVertical={poster_path}
                posterHorizontal={backdrop_path}
                loadFullSize={slideIsVisible && !isMobile}
            />
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
                    type={type}
                />
                <ButtonMain
                    as={Link}
                    to={routesConfig[type].info + '/' + id}
                    text='Подробнее'
                    place='slide-main'
                />
            </div>
        </div>
    );
}

export default SlideMain;