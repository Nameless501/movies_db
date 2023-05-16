import { useState, useEffect } from "react";
import { SCREEN_SIZE_TABLET, SCREEN_SIZE_MOBILE } from "../utils/constants";

function useResize() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsDesktop(() => window.innerWidth >= SCREEN_SIZE_TABLET);
      setIsTablet(
        () =>
          window.innerWidth >= SCREEN_SIZE_MOBILE &&
          window.innerWidth < SCREEN_SIZE_TABLET
      );
      setIsMobile(() => window.innerWidth < SCREEN_SIZE_MOBILE);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { isDesktop, isTablet, isMobile };
}

export default useResize;
