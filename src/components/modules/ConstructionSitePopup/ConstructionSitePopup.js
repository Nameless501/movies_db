import { usePortalContext } from '../../../contexts/PortalContext';
import PopupWrapper from '../../components/PopupWrapper/PopupWrapper';
import CloseButton from '../../UI/CloseButton/CloseButton';
import constructionIcon from '../../../images/icon_construction.png';
import './ConstructionSitePopup.css';

function SharePopup() {
    const { closeAll } = usePortalContext();

    return (
        <PopupWrapper
            handleClose={closeAll}
        >
            <div className='construction-popup'>
                <img
                    src={constructionIcon}
                    alt='Строительное ограждение'
                    className='construction-popup__image'
                />
                <p className='construction-popup__text' >
                    Тут еще ведутся строительные работы
                </p>
                <CloseButton
                    place='popup'
                    handleClick={closeAll}
                />
            </div>
        </PopupWrapper>
    );
}

export default SharePopup;