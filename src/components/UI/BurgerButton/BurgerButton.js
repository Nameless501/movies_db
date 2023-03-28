import './BurgerButton.css';

function BurgerButton({ place, handleClick }) {
    return (
        <button
            type='button'
            className={`
                burger-button
                ${place && 'burger-button_place_' + place}
            `}
            onClick={handleClick}
        >
            <div className='burger-button__line' />
            <div className='burger-button__line' />
            <div className='burger-button__line' />
        </button>
    );
}

export default BurgerButton;