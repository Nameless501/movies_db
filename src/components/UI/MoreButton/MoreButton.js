import './MoreButton.css';

function MoreButton({ handleClick, place }) {
    return (
        <button
            type='button'
            className={`
                more-button
                ${place && 'more-button_place_' + place}
            `}
            onClick={handleClick}
        >
            Ещё
        </button>
    );
}

export default MoreButton;