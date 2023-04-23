import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { usePortalContext } from '../../../contexts/PortalContext';
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';
import { fetchAccountStates, addToWatchList } from '../../../store/user/userSlice';
import IconButton from '../../UI/IconButton/IconButton';
import ButtonTooltip from '../../UI/ButtonTooltip/ButtonTooltip';
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
        if (isIntersecting && isLoggedIn) {
            dispatch(fetchAccountStates({ id, type }));
        }
    }, [isIntersecting, isLoggedIn, dispatch, id, type]);

    // buttons click handlers

    function redirectToSignIn() {
        history.push(routesConfig.signIn);
    }

    function handleAddToWatchlist(evt) {
        const isInWatchlist = states?.[type]?.[id]?.watchlist;
        const button = evt.currentTarget;

        if (!isLoggedIn) {
            redirectToSignIn();
            return;
        }

        if (isInWatchlist) {
            openConstructionPopup('В настоящий момент API TMDB не поддерживает удаление элементов из пользовательских списков. Как только эта возможность будет добавлена, то она будет реализована и на этой странице. Пока это можно сделать на сайте TMDB в своем профиле.');
        } else {
            dispatch(addToWatchList({ id, type }))
                .then(() => button.classList.add('animation-bounce'))
                .then(() => setTimeout(() => button.classList.remove('animation-bounce'), 500));
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
            <ButtonTooltip
                text='Смотреть позже'
                place={place}
            >
                <IconButton
                    Icon={states?.[type]?.[id]?.watchlist ? BsBookmarkStarFill : BsBookmarkPlus}
                    active={states?.[type]?.[id]?.watchlist}
                    place={place}
                    handleClick={handleAddToWatchlist}
                />
            </ButtonTooltip>
            <ButtonTooltip
                text='Поделиться'
                place={place}
            >
                <IconButton
                    Icon={HiShare}
                    place={place}
                    handleClick={handleShapePopupOpen}
                />
            </ButtonTooltip>
            <ButtonTooltip
                text='Трейлер'
                place={place}
            >
                <IconButton
                    Icon={FaRegPlayCircle}
                    place={place}
                    handleClick={handleTrailerPopupOpen}
                />
            </ButtonTooltip>
            <ButtonTooltip
                text='Оценить'
                place={place}
            >
                <IconButton
                    Icon={states?.[type]?.[id]?.rated ? FaStar : FaRegStar}
                    active={states?.[type]?.[id]?.rated}
                    place={place}
                    handleClick={handleRate}
                />
            </ButtonTooltip>
        </div>
    );
}

export default CardButtons;