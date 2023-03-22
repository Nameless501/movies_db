import { usePortalContext } from '../../../contexts/PortalContext';
import ShareButton from '../../UI/ShareButton/ShareButton';
import CardButton from '../../UI/CardButton/CardButton';
import PlayButton from '../../UI/PlayButton/PlayButton';
import './MovieInfoButtons.css';

function MovieInfoButtons({ isSaved, place, movieId }) {
    const { openTrailerPopup, openSharePopup } = usePortalContext();

    function handleTrailerPopupOpen() {
        openTrailerPopup(movieId);
    }

    function handleShapePopupOpen() {
        openSharePopup(movieId);
    }

    return (
        <div
            className={`
                movie-info-buttons
                ${place && 'movie-info-buttons_place_' + place}
            `}
        >
            <CardButton
                place={place}
                isSaved={isSaved}
            />
            <ShareButton
                place={place}
                handleClick={handleShapePopupOpen}
            />
            {
                place !== 'movie-card' &&
                    <PlayButton
                        place={place}
                        handleClick={handleTrailerPopupOpen}
                    />
            }
        </div>
    );
}

export default MovieInfoButtons;