import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { usePortalContext } from '../../../contexts/PortalContext';
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';
import { fetchAccountStates, addToWatchList } from '../../../store/user/userSlice';
import IconButton from '../../UI/IconButton/IconButton';
import { BsBookmarkStarFill, BsBookmarkPlus } from 'react-icons/bs';
import { FaRegStar, FaStar, FaRegPlayCircle } from 'react-icons/fa';
import { HiShare } from 'react-icons/hi';
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
            !isInWatchlist ?
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
            <IconButton
                Icon={ states?.[type]?.[id]?.watchlist ? BsBookmarkStarFill : BsBookmarkPlus }
                active={states?.[type]?.[id]?.watchlist}
                place={place}
                handleClick={handleAddToWatchlist}
            />
            <IconButton
                Icon={HiShare}
                place={place}
                handleClick={handleShapePopupOpen}
            />
            <IconButton
                Icon={FaRegPlayCircle}
                place={place}
                handleClick={handleTrailerPopupOpen}
            />
            <IconButton
                Icon={ states?.[type]?.[id]?.rated ? FaStar : FaRegStar }
                active={states?.[type]?.[id]?.rated}
                place={place}
                handleClick={handleRate}
            />
        </div>
    );
}

export default CardButtons;