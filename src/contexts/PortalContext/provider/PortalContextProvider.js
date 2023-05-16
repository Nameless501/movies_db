import { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import PortalContext from "../context/PortalContext";

export function PortalContextProvider({ children }) {
  const [data, setData] = useState({ type: "movie", id: null });
  const [text, setText] = useState("");

  const [trailerPopupIsOpen, setTrailerPopupState] = useState(false);
  const [sharePopupIsOpen, setSharePopupState] = useState(false);
  const [ratingPopupIsOpen, setRatingPopupState] = useState(false);

  const [constructionPopupIsOpen, setConstructionPopupState] = useState(false);

  const location = useLocation();

  const closeAll = useCallback(() => {
    setTrailerPopupState(false);
    setSharePopupState(false);
    setConstructionPopupState(false);
    setRatingPopupState(false);

    setData({ type: "movie", id: null });
    setText("");
  }, []);

  function openTrailerPopup(type, id) {
    setData({ type, id });
    setTrailerPopupState(true);
  }

  function openSharePopup(type, id) {
    setData({ type, id });
    setSharePopupState(true);
  }

  function openRatingPopup(type, id) {
    setData({ type, id });
    setRatingPopupState(true);
  }

  function openConstructionPopup(text) {
    setConstructionPopupState(true);
    setText(text);
  }

  // Автоматическое закритие попапов, если перейти на другой роут

  useEffect(() => {
    closeAll();
  }, [location, closeAll]);

  return (
    <PortalContext.Provider
      value={{
        data,
        text,
        trailerPopupIsOpen,
        sharePopupIsOpen,
        ratingPopupIsOpen,
        constructionPopupIsOpen,
        openTrailerPopup,
        openSharePopup,
        openRatingPopup,
        openConstructionPopup,
        closeAll,
      }}
    >
      {children}
    </PortalContext.Provider>
  );
}
