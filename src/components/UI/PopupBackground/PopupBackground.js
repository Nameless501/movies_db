import './PopupBackground.css';

function PopupBackground({ handleClick, children }) {
    return (
        <div
            className="popup-background"
            onClick={handleClick}
        >
            {children}
        </div>
    );
}

export default PopupBackground;