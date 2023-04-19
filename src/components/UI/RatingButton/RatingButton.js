import './RatingButton.css';

function RatingButton({ handleClick, isRated, place }) {
    return (
        <button
            type='button'
            className={`
                rating-button
                ${ isRated && 'rating-button_rated' }
                ${ place && 'rating-button_place_' + place }
            `}
            onClick={handleClick}
        >
        </button>
    );
}

export default RatingButton;