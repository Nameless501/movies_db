import ShareButton from '../../UI/ShareButton/ShareButton';
import CardButton from '../../UI/CardButton/CardButton';
import PlayButton from '../../UI/PlayButton/PlayButton';
import './MovieInfoButtons.css';

function MovieInfoButtons({ isSaved, place }) {
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
            />
            {
                place !== 'movie-card' &&
                    <PlayButton
                        place={place}
                    />
            }
        </div>
    );
}

export default MovieInfoButtons;