import './CardButtonDelete.css';

function CardButtonDelete({ handleClick }) {
    return (
        <button
            type='button'
            className='card-button-delete'
            onClick={handleClick}
        />
    );
}

export default CardButtonDelete;