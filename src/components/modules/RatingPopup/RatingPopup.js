import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setRating } from '../../../store/user/userSlice';
import { usePortalContext } from '../../../contexts/PortalContext';
import PopupWrapper from '../../components/PopupWrapper/PopupWrapper';
import CloseButton from '../../UI/CloseButton/CloseButton';
import ButtonMain from '../../UI/ButtonMain/ButtonMain';
import PreloaderSmall from '../../UI/PreloaderSmall/PreloaderSmall';
import IconButton from '../../UI/IconButton/IconButton';
import { FaRegStar, FaStar } from 'react-icons/fa';
import './RatingPopup.css';

function RatingPopup() {
    const { data, closeAll } = usePortalContext();
    const state = useSelector((state) => state.user?.states?.[data.type]?.[data.id])

    const [value, setValue] = useState(() => state?.rated?.value ?? 0);
    const [hover, setHover] = useState(0);
    const [isChanged, setIsChanged] = useState(false);

    const dispatch = useDispatch();

    function handleRatingSet() {
        dispatch(setRating({ ...data, value }))
            .then(() => closeAll());
    };

    function handleClick(evt, value) {
        const button = evt.currentTarget

        button.classList.add('animation-bounce');
        setTimeout(() => button.classList.remove('animation-bounce'), 500);

        setValue(value);
        setIsChanged(true);
    }

    return (
        <PopupWrapper
            handleClose={closeAll}
        >
            <div className='rating-popup'>
                <h2 className='rating-popup__title' >
                    {data.type === 'movie' && 'Оценить фильм'}
                    {data.type === 'tv' && 'Оценить сериал'}
                </h2>
                <ul className='rating-popup__buttons' >
                    {[...Array(10)].map((star, index) => {
                        index += 1;
                        return (
                            <li
                                key={index}
                                className='rating-popup__button'
                                onMouseEnter={() => setHover(index)}
                                onMouseLeave={() => setHover(value)}
                            >
                                <IconButton
                                    Icon={index <= (hover || value) ? FaStar : FaRegStar}
                                    active={index <= (hover || value)}
                                    place='rating-popup'
                                    handleClick={(evt) => handleClick(evt, index)}
                                />
                            </li>
                        );
                    })}
                </ul>
                {
                    state?.loading === 'pending' ?
                        <PreloaderSmall
                            place='form'
                        />
                        :
                        <ButtonMain
                            text='Оценить'
                            disabled={!isChanged}
                            handleClick={handleRatingSet}
                            place='form'
                        />
                }
                <CloseButton
                    place='popup'
                    handleClick={closeAll}
                />
            </div>
        </PopupWrapper>
    );
}

export default RatingPopup;