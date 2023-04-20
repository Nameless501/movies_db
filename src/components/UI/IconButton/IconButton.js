import { IconContext } from 'react-icons';
import './IconButton.css';

function IconButton({ Icon, handleClick, place, type = 'button', active = false, disabled = false }) {
    return (
        <button
            type={type}
            className={`
                icon-button
                ${ place && 'icon-button_place_' + place }
            `}
            onClick={handleClick}
            disabled={disabled}
        >
            <IconContext.Provider
                value={{
                    className: `
                        icon-button__icon
                        ${ active && 'icon-button__icon_active' }
                    `
                }}
            >
                { Icon && <Icon />}
            </IconContext.Provider>
        </button>
    );
}

export default IconButton;