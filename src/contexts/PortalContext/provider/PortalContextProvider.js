import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PortalContext from "../context/PortalContext";

export function PortalContextProvider({ children }) {
    const [data, setData] = useState({ type: 'movie', id: null });
    const [trailerPopupIsOpen, setTrailerPopupState] = useState(false);
    const [sharePopupIsOpen, setSharePopupState] = useState(false);
    const [constructionPopupIsOpen, setConstructionPopupState] = useState(false);

    const location = useLocation();

    function closeAll() {
        setTrailerPopupState(false);
        setSharePopupState(false);
        setConstructionPopupState(false);

        setData({ type: 'movie', id: null });
    };

    function openTrailerPopup(type, id) {
        setData({ type, id });
        setTrailerPopupState(true);
    }

    function openSharePopup(type, id) {
        setData({ type, id });
        setSharePopupState(true);
    }

    function openConstructionPopup() {
        setConstructionPopupState(true);
    }

    // Автоматическое закритие попапов, если перейти на другой роут

    useEffect(() => {
        closeAll();
    }, [location]);

    return (
        <PortalContext.Provider
            value={{
                data,
                trailerPopupIsOpen,
                sharePopupIsOpen,
                constructionPopupIsOpen,
                openTrailerPopup,
                openSharePopup,
                openConstructionPopup,
                closeAll
            }}
        >
            {children}
        </PortalContext.Provider>
    );
}