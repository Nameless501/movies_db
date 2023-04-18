import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { usePortalContext } from '../../../contexts/PortalContext';
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';
import { fetchAccountStates, addToWatchList } from '../../../store/user/userSlice';
import ShareButton from '../../UI/ShareButton/ShareButton';
import CardButton from '../../UI/CardButton/CardButton';
import PlayButton from '../../UI/PlayButton/PlayButton';
import './CardButtons.css';

function CardButtons({ isSaved, place, id, type = 'movies' }) {
    const buttonsRef = useRef();
    const [isIntersecting, setIsIntersecting] = useState(false);
    const { openTrailerPopup, openSharePopup } = usePortalContext();
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
            dispatch(fetchAccountStates({ id, type: type === 'movies' ? 'movie' : 'tv' }));
        }
    }, [isIntersecting, isLoggedIn, dispatch, id, type]);

    // buttons click handlers

    function addToWtachlist() {
        dispatch(addToWatchList({ id, type: type === 'movies' ? 'movie' : 'tv' }))
    }

    function deleteFromWtachlist() {

    }

    function handleTrailerPopupOpen() {
        openTrailerPopup(type, id);
    }

    function handleShapePopupOpen() {
        openSharePopup(type, id);
    }

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
                isSaved={states?.[type === 'movies' ? 'movie' : 'tv']?.[id]?.watchlist}
                handleClick={addToWtachlist}
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