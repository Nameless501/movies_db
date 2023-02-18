import { useState, useEffect } from 'react';
import { MOVIES_COUNT_DESKTOP, MOVIES_COUNT_TABLET, MOVIES_COUNT_MOBILE, MOVIES_MORE_DESKTOP, MOVIES_MORE_MOBILE } from '../utils/constants';

function useResize() {
    const [cardsCount, setCardsCount] = useState(12);
    const [newCardsCount, setNewCardsCount] = useState(3);

    useEffect(() => {
        function handleResize() {
            const renderCount = window.innerWidth > 1279 ? MOVIES_COUNT_DESKTOP : window.innerWidth > 635 ?
                MOVIES_COUNT_TABLET : MOVIES_COUNT_MOBILE;

            const downloadCount = window.innerWidth > 1279 ? MOVIES_MORE_DESKTOP : MOVIES_MORE_MOBILE;

            setCardsCount(renderCount);
            setNewCardsCount(downloadCount);
        }

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, [])

    return { cardsCount, newCardsCount };
}

export default useResize;