import useResize from '../../../hooks/useResize';
import useImageLoad from '../../../hooks/useImageLoad';
import { POSTER_HORIZONTAL_ORIGINAL, POSTER_VERTICAL_SMALL, POSTER_HORIZONTAL_SMALL } from '../../../utils/constants';
import './PosterLazyLoad.css';

function PosterLazyLoad({ posterVertical, posterHorizontal, loadFullSize, place }) {
    const { isMobile } = useResize();
    const { imageState, checkImageLoading } = useImageLoad();

    const posterFullSize = POSTER_HORIZONTAL_ORIGINAL + posterHorizontal;
    const posterSmallSize = isMobile ? (POSTER_VERTICAL_SMALL + posterVertical) : (POSTER_HORIZONTAL_SMALL + posterHorizontal);

    return (
        <div
            className={`
                poster-lazy
                ${ imageState === 'loaded' && 'poster-lazy_loaded' }
                ${ place && 'poster-lazy_place_' + place }
            `}
        >
            {
                loadFullSize &&
                <img
                    src={posterFullSize}
                    alt='Постер фильма'
                    className='poster-lazy__full-size'
                    onLoad={checkImageLoading}
                    style={{ 'display': `${ imageState === 'loaded' && 'block' }` }}
                />
            }
            <img
                src={posterSmallSize}
                alt='Постер фильма'
                className='poster-lazy__small-size'
            />
        </div>
    );
}

export default PosterLazyLoad;