import { usePortalContext } from '../../../contexts/PortalContext';
import ShareButton from '../../UI/ShareButton/ShareButton';
import CardButton from '../../UI/CardButton/CardButton';
import PlayButton from '../../UI/PlayButton/PlayButton';
import './CardButtons.css';

function CardButtons({ isSaved, place, id, type = 'movies' }) {
    const { openTrailerPopup, openSharePopup, openConstructionPopup } = usePortalContext();

    function handleTrailerPopupOpen() {
        openTrailerPopup(type, id);
    }

    function handleShapePopupOpen() {
        openSharePopup(type, id);
    }

    return (
        <div
            className={`
                card-buttons
                ${place && 'card-buttons_place_' + place}
            `}
        >
            <CardButton
                place={place}
                isSaved={isSaved}
                handleClick={openConstructionPopup}
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

export default CardButtons;