import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

function usePageScroll() {
    const location = useLocation();

    function scrollToTop() {
        window.scrollTo(0,0);
    }

    useLayoutEffect(() => {
        scrollToTop();
    }, [location]);
}

export default usePageScroll;