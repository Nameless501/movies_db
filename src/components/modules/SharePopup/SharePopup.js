import { usePortalContext } from '../../../contexts/PortalContext';
import PopupWrapper from '../../components/PopupWrapper/PopupWrapper';
import CloseButton from '../../UI/CloseButton/CloseButton';
import ShareLink from '../../UI/ShareLink/ShareLink';
import copyIcon from '../../../images/icon_copy.svg';
import telegramIcon from '../../../images/icon_telegram.svg';
import whatsAppIcon from '../../../images/icon_whatsapp.svg';
import { getTelegramShareLink, getWhatsappShareLink } from '../../../utils/constants';
import './SharePopup.css';

function SharePopup() {
    const { movieId, closeAll } = usePortalContext();
    const movieUrl = window.location.protocol + '//' + window.location.host + '/movies_db/#/movie/' + movieId;
    const encodedMovieUrl = window.location.protocol + '//' + window.location.host + '%2Fmovies_db%2F%23%2Fmovie%2F' + movieId;

    function handleLinkCopy() {
        navigator.clipboard.writeText(movieUrl);
        closeAll();
    }

    return (
        <PopupWrapper
            handleClose={closeAll}
        >
            <div className='share-popup'>
                <ul className='share-popup__options' >
                    <li className='share-popup__options-item' >
                        <ShareLink
                            text='Копировать ссылку'
                            icon={copyIcon}
                            handleClick={handleLinkCopy}
                            button={true}
                        />
                    </li>
                    <li className='share-popup__options-item' >
                        <ShareLink
                            text='Telegram'
                            icon={telegramIcon}
                            link={getTelegramShareLink(encodedMovieUrl)}
                        />
                    </li>
                    <li className='share-popup__options-item' >
                        <ShareLink
                            text='WhatsApp'
                            icon={whatsAppIcon}
                            link={getWhatsappShareLink(encodedMovieUrl)}
                        />
                    </li>
                </ul>
                <CloseButton
                    place='popup'
                    handleClick={closeAll}
                />
            </div>
        </PopupWrapper>
    );
}

export default SharePopup;