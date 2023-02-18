import './BurgerButton.css';

function BurgerButton({ handleClick }) {
    return (
        <button
            type='button'
            className='burger-button'
            onClick={handleClick}
        >
            <div className='burger-button__line' />
            <div className='burger-button__line' />
            <div className='burger-button__line' />
        </button>
    );
}

export default BurgerButton;