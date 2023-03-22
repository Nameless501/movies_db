import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTrailer } from '../../../store/trailer/trailerSlice';
import { usePortalContext } from '../../../contexts/PortalContext';
import PopupWrapper from '../../components/PopupWrapper/PopupWrapper';
import CloseButton from '../../UI/CloseButton/CloseButton';
import ErrorMessage from '../../UI/ErrorMessage/ErrorMessage';
import { TRAILER_BASE_URL } from '../../../utils/constants';
import './TrailerPopup.css';

function TrailerPopup() {
    const { movieId, closeAll } = usePortalContext();
    const { key, loading, error } = useSelector(state => state.trailer);
    const dispatch = useDispatch();

    // API fetch

    useEffect(() => {
        dispatch(fetchTrailer(movieId));
    }, [dispatch, movieId]);

    return (
        <PopupWrapper
            handleClose={closeAll}
        >
            <div className='trailer-popup'>
                {
                    (!loading && key) &&
                    <iframe
                        title='Трейлер фильма'
                        src={TRAILER_BASE_URL + key}
                        frameBorder={0}
                        allowFullScreen={true}
                        allow="autoplay; picture-in-picture; fullscreen;"
                        className='trailer-popup__video'
                    />
                }
                {
                    (!loading && error) &&
                    <div className='trailer-popup__error-wrapper'>
                        <ErrorMessage
                            text={error}
                            place='trailer-popup'
                        />
                    </div>
                }
                <CloseButton
                    place='popup'
                    handleClick={closeAll}
                />
            </div>
        </PopupWrapper>
    );
}

export default TrailerPopup;