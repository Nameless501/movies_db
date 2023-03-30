import useResize from '../../../hooks/useResize';
import { POSTER_HORIZONTAL_ORIGINAL, POSTER_VERTICAL_SMALL } from '../../../utils/constants';
import './PagePoster.css';

function PagePoster({ posterHorizontal, posterVertical }) {
    const { isMobile } = useResize();

    const posterUrl = isMobile ? POSTER_VERTICAL_SMALL + posterVertical : POSTER_HORIZONTAL_ORIGINAL + posterHorizontal;

    return (
        <div
            className='page-poster'
            style={{'--image_url': `url(${posterUrl})`}}
        />
    );
}

export default PagePoster;
