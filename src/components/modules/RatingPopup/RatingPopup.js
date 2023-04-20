import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setRating } from '../../../store/user/userSlice';
import { usePortalContext } from '../../../contexts/PortalContext';
import PopupWrapper from '../../components/PopupWrapper/PopupWrapper';
import CloseButton from '../../UI/CloseButton/CloseButton';
import FormButton from '../../UI/FormButton/FormButton';
import PreloaderSmall from '../../UI/PreloaderSmall/PreloaderSmall';
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

    function handleClick(value) {
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
                            <li key={index} >
                                <button
                                    type="button"
                                    className={`
                                        rating-popup__star-button
                                        ${index <= (hover || value) && 'rating-popup__star-button_active'}
                                    `}
                                    onClick={() => handleClick(index)}
                                    onMouseEnter={() => setHover(index)}
                                    onMouseLeave={() => setHover(value)}
                                >
                                </button>
                            </li>
                        );
                    })}
                </ul>
                {
                    state?.loading === 'pending' ?
                        <PreloaderSmall />
                        :
                        <FormButton
                            text='Оценить'
                            type='button'
                            disabled={!isChanged}
                            handleClick={handleRatingSet}
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