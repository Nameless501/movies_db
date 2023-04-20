import { IconContext } from 'react-icons';
import { IoClose } from 'react-icons/io5';
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
            <IconContext.Provider
                value={{ className: 'close-button__icon' }}
            >
                <IoClose />
            </IconContext.Provider>
        </button>
    );
}

export default CloseButton;