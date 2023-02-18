import './CardButtonSaved.css';

function CardButtonSaved({ handleClick }) {
    return (
        <button
            type='button'
            className='card-button-saved'
            onClick={handleClick}
        />
    );
}

export default CardButtonSaved;