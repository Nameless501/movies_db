import { usePortalContext } from '../../../contexts/PortalContext';
import PopupWrapper from '../../components/PopupWrapper/PopupWrapper';
import CloseButton from '../../UI/CloseButton/CloseButton';
import ShareLink from '../../UI/ShareLink/ShareLink';
import { getTelegramShareLink, getWhatsappShareLink, getTwitterShareLink, getLinkForCopy } from '../../../utils/constants';
import copyIcon from '../../../images/icon_copy.svg';
import telegramIcon from '../../../images/icon_telegram.svg';
import whatsAppIcon from '../../../images/icon_whatsapp.svg';
import twitterIcon from '../../../images/icon_twitter.svg';
import './SharePopup.css';

function SharePopup() {
    const { data, closeAll } = usePortalContext();
    const { type, id } = data;

    function handleLinkCopy() {
        navigator.clipboard.writeText(getLinkForCopy(type, id));
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
                            link={getTelegramShareLink(type, id)}
                        />
                    </li>
                    <li className='share-popup__options-item' >
                        <ShareLink
                            text='WhatsApp'
                            icon={whatsAppIcon}
                            link={getWhatsappShareLink(type, id)}
                        />
                    </li>
                    <li className='share-popup__options-item' >
                        <ShareLink
                            text='Twitter'
                            icon={twitterIcon}
                            link={getTwitterShareLink(type, id)}
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