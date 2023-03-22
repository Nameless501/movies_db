import './PlayButton.css';

function PlayButton({ handleClick, place }) {
    return (
        <button
            type='button'
            className={`play-button ${place && 'play-button_place_' + place}`}
            onClick={handleClick}
        >
        </button>
    );
}

export default PlayButton;