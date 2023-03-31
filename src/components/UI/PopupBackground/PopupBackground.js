import './PopupBackground.css';

function PopupBackground({ handleClick, disabled = false, children }) {
    return (
        <div
            className={`
                popup-background
                ${ disabled && 'popup-background_disabled' }
            `}
            onClick={handleClick}
        >
            {children}
        </div>
    );
}

export default PopupBackground;