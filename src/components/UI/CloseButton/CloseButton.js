import './CloseButton.css';

function CloseButton({ place, handleClick }) {
    return (
        <button
            type='button'
            onClick={handleClick}
            className={`
                    close-button
                    ${place ? 'close-button_place_' + place : null}
                `}
        >
            <div className='close-button__line close-button__line_vertical' />
            <div className='close-button__line close-button__line_horizontal' />
        </button>
    );
}

export default CloseButton;