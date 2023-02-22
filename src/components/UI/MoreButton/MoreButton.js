import './MoreButton.css';

function MoreButton({ handleClick }) {
    return (
        <div className='more-button__wrapper' >
            <button
                type='button'
                className='more-button'
                onClick={handleClick}
            >
                Ещё
            </button>
        </div>
    );
}

export default MoreButton;