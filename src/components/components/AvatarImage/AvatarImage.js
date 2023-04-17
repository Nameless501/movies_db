import { POSTER_VERTICAL_SMALL } from '../../../utils/constants';
import useImageLoad from '../../../hooks/useImageLoad';
import avatarFallback from '../../../images/icon_photo_fallback.png';
import './AvatarImage.css';

function AvatarImage({ src, place }) {
    const { imageState, checkImageLoading } = useImageLoad();

    return (
        <div
            className={`
                avatar
                ${ place && 'avatar_place_' + place }
            `}
            style={{ 'backgroundImage': `url(${imageState !== 'loaded' && avatarFallback})` }}
        >
            <img
                src={ POSTER_VERTICAL_SMALL + src }
                alt='Аватар'
                className='avatar__image'
                style={{ 'display': `${imageState === 'loaded' && 'block'}` }}
                onLoad={checkImageLoading}
            />
        </div>
    );
}

export default AvatarImage;