import './CardButton.css';

function CardButton({ handleClick }) {
    return (
        <button
            type='button'
            className='card-button'
            onClick={handleClick}
        >
            Сохранить
        </button>
    );
}

export default CardButton;