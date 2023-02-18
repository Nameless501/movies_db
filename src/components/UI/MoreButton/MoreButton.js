import './MoreButton.css';

function MoreButton({ handleClick }) {
    return (
        <button
            type='button'
            className='more-button'
            onClick={handleClick}
        >
            Ещё
        </button>
    );
}

export default MoreButton;