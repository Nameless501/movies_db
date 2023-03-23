import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PortalContext from "../context/PortalContext";

export function PortalContextProvider({ children }) {
    const [movieId, setMovieId] = useState(null);
    const [trailerPopupIsOpen, setTrailerPopupState] = useState(false);
    const [sharePopupIsOpen, setSharePopupState] = useState(false);
    const [constructionPopupIsOpen, setConstructionPopupState] = useState(false);

    const location = useLocation();

    function closeAll() {
        setTrailerPopupState(false);
        setSharePopupState(false);
        setConstructionPopupState(false);

        setMovieId(null);
    };

    function openTrailerPopup(id) {
        setMovieId(id);
        setTrailerPopupState(true);
    }

    function openSharePopup(id) {
        setMovieId(id);
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
                movieId,
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