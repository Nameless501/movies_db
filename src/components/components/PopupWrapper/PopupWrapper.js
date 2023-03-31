
import { useEffect } from "react";
import PopupBackground from "../../UI/PopupBackground/PopupBackground";

function PopupWrapper({ handleClose, disabled = false, children }) {
    function handleClickOutside(evt) {
        if (evt.target === evt.currentTarget) {
            handleClose();
        }
    }

    function handleEscapeClose(evt) {
        if (evt.code === 'Escape') {
            handleClose();
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', handleEscapeClose);

        return () => {
            window.removeEventListener('keydown', handleEscapeClose);
        }
    }, []);

    return (
        <PopupBackground
            handleClick={handleClickOutside}
            disabled={disabled}
        >
            {children}
        </PopupBackground>
    );
}

export default PopupWrapper;