import './CardButton.css';

function CardButton({ handleClick, isActive }) {
    return (
        <button
            type='button'
            className={`card-button ${isActive && 'card-button_active'}`}
            onClick={handleClick}
        >
        </button>
    );
}

export default CardButton;