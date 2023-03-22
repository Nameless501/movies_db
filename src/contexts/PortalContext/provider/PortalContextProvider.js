import { useState } from "react";
import PortalContext from "../context/PortalContext";

export function PortalContextProvider({ children }) {
    const [movieId, setMovieId] = useState(null);
    const [shareLink, setShareLink] = useState(null);
    const [trailerPopupIsOpen, setTrailerPopupState] = useState(false);
    const [sharePopupIsOpen, setSharePopupState] = useState(false);

    function closeAll() {
        setTrailerPopupState(false);
        setSharePopupState(false);

        setMovieId(null);
        setShareLink(null);
    };

    function openTrailerPopup(id) {
        setMovieId(id);
        setTrailerPopupState(true);
    }

    function openSharePopup(link) {
        setShareLink(link);
        setSharePopupState(true);
    }

    return (
        <PortalContext.Provider
            value={{
                movieId,
                shareLink,
                trailerPopupIsOpen,
                sharePopupIsOpen,
                openTrailerPopup,
                openSharePopup,
                closeAll
            }}
        >
            {children}
        </PortalContext.Provider>
    );
}