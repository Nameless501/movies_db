import { POSTER_VERTICAL_SMALL } from '../../../utils/constants';
import useImageLoad from '../../../hooks/useImageLoad';
import posterFallback from '../../../images/poster_fallback.png';
import './PosterImage.css';

function PosterImage({ src, place }) {
    const { imageState, checkImageLoading } = useImageLoad();

    return (
        <div
            className={`
                poster
                ${ place && 'poster_place_' + place }
            `}
            style={{ 'backgroundImage': `url(${imageState !== 'loaded' && posterFallback})` }}
        >
            <img
                src={ POSTER_VERTICAL_SMALL + src }
                alt=' Постер фильма'
                className='poster__image'
                style={{ 'display': `${imageState === 'loaded' && 'block'}` }}
                onLoad={checkImageLoading}
            />
        </div>
    );
}

export default PosterImage;