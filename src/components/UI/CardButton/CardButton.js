import './CardButton.css';

function CardButton({ handleClick, isSaved, place }) {
    return (
        <button
            type='button'
            className={`
                card-button
                ${ isSaved && 'card-button_saved' }
                ${ place && 'card-button_place_' + place }
            `}
            onClick={handleClick}
        >
        </button>
    );
}

export default CardButton;