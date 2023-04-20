import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { usePortalContext } from '../../../contexts/PortalContext';
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';
import { fetchAccountStates, addToWatchList } from '../../../store/user/userSlice';
import ShareButton from '../../UI/ShareButton/ShareButton';
import CardButton from '../../UI/CardButton/CardButton';
import PlayButton from '../../UI/PlayButton/PlayButton';
import RatingButton from '../../UI/RatingButton/RatingButton';
import { routesConfig } from '../../../utils/configs';
import './CardButtons.css';

function CardButtons({ place, id, type }) {
    const buttonsRef = useRef();
    const [isIntersecting, setIsIntersecting] = useState(false);

    const { openTrailerPopup, openSharePopup, openRatingPopup, openConstructionPopup } = usePortalContext();
    const { isLoggedIn, states } = useSelector((state) => state.user);

    const dispatch = useDispatch();
    const history = useHistory();

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

    function redirectToSignIn() {
        history.push(routesConfig.signIn);
    }

    function handleAddToWatchlist() {
        const isInWatchlist = states?.[type]?.[id]?.watchlist;

        if(isLoggedIn) {
            isInWatchlist ?
                dispatch(addToWatchList({ id, type }))
                :
                openConstructionPopup('В настоящий момент API TMDB не поддерживает удаление элементов из пользовательских списков. Как только эта возможность будет добавлена, то она будет реализована и на этой странице. Пока это можно сделать на сайте TMDB в своем профиле.');
        } else {
            redirectToSignIn();
        }
    };

    function handleTrailerPopupOpen() {
        openTrailerPopup(type, id);
    };

    function handleShapePopupOpen() {
        openSharePopup(type, id);
    };

    function handleRate() {
        isLoggedIn ? openRatingPopup(type, id) : redirectToSignIn();
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
                isSaved={states?.[type]?.[id]?.watchlist}
                handleClick={handleAddToWatchlist}
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
            <RatingButton
                place={place}
                isRated={states?.[type]?.[id]?.rated}
                handleClick={handleRate}
            />
        </div>
    );
}

export default CardButtons;