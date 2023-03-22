import './ShareButton.css';

function ShareButton({ handleClick, place }) {
    return (
        <button
            type='button'
            className={`share-button ${place && 'share-button_place_' + place}`}
            onClick={handleClick}
        >
        </button>
    );
}

export default ShareButton;