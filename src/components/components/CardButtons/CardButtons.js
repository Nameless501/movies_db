import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { usePortalContext } from '../../../contexts/PortalContext';
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';
import { fetchAccountStates, addToWatchList } from '../../../store/user/userSlice';
import ShareButton from '../../UI/ShareButton/ShareButton';
import CardButton from '../../UI/CardButton/CardButton';
import PlayButton from '../../UI/PlayButton/PlayButton';
import './CardButtons.css';

function CardButtons({ place, id, type }) {
    const buttonsRef = useRef();
    const [isIntersecting, setIsIntersecting] = useState(false);
    const { openTrailerPopup, openSharePopup, openConstructionPopup } = usePortalContext();
    const { isLoggedIn, states } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    // check if in watch list when user logged in and card is visible

    useIntersectionObserver(
        buttonsRef,
        ([{ isIntersecting }], observerElement) => {
            if (isIntersecting) {
                setIsIntersecting(true);
                observerElement.unobserve(buttonsRef.current);
            }
        }
    );

    useEffect(() => {
        if(isIntersecting && isLoggedIn) {
            dispatch(fetchAccountStates({ id, type }));
        }
    }, [isIntersecting, isLoggedIn, dispatch, id, type]);

    // buttons click handlers

    function handleAddToWatchlist() {
        dispatch(addToWatchList({ id, type }))
    };

    function handleDeleteFromWatchlist() {
        openConstructionPopup('В настоящий момент API TMDB не поддерживает удаление элементов из пользовательских списков. Как только эта возможность будет добавлена, то она будет реализована и на этой странице. Пока это можно сделать на сайте TMDB в своем профиле.')
    };

    function handleTrailerPopupOpen() {
        openTrailerPopup(type, id);
    };

    function handleShapePopupOpen() {
        openSharePopup(type, id);
    };

    return (
        <div
            className={`
                card-buttons
                ${place && 'card-buttons_place_' + place}
            `}
            ref={buttonsRef}
        >
            <CardButton
                place={place}
                isSaved={states?.[type]?.[id]?.watchlist}
                handleClick={states?.[type]?.[id]?.watchlist ? handleDeleteFromWatchlist : handleAddToWatchlist}
            />
            <ShareButton
                place={place}
                handleClick={handleShapePopupOpen}
            />
            {
                place !== 'movie-card' &&
                    <PlayButton
                        place={place}
                        handleClick={handleTrailerPopupOpen}
                    />
            }
        </div>
    );
}

export default CardButtons;