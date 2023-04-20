import { useState } from 'react';
import { usePortalContext } from '../../../contexts/PortalContext';
import PopupWrapper from '../../components/PopupWrapper/PopupWrapper';
import CloseButton from '../../UI/CloseButton/CloseButton';
import ShareLink from '../../UI/ShareLink/ShareLink';
import { BiCopy, BiCheck } from 'react-icons/bi';
import { BsTwitter, BsWhatsapp } from 'react-icons/bs';
import { FaTelegramPlane } from 'react-icons/fa';
import { getTelegramShareLink, getWhatsappShareLink, getTwitterShareLink, getLinkForCopy } from '../../../utils/constants';
import './SharePopup.css';

function SharePopup() {
    const [isCopied, setIsCopied] = useState(false);
    const { data, closeAll } = usePortalContext();
    const { type, id } = data;

    function handleStateChange() {
        if (!isCopied) {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        }
    }

    function handleLinkCopy() {
        navigator.clipboard.writeText(getLinkForCopy(type, id));
        handleStateChange();
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
                            handleClick={handleLinkCopy}
                            button={true}
                            Icon={isCopied ? BiCheck : BiCopy}
                        />
                    </li>
                    <li className='share-popup__options-item' >
                        <ShareLink
                            text='Telegram'
                            link={getTelegramShareLink(type, id)}
                            Icon={FaTelegramPlane}
                        />
                    </li>
                    <li className='share-popup__options-item' >
                        <ShareLink
                            text='WhatsApp'
                            link={getWhatsappShareLink(type, id)}
                            Icon={BsWhatsapp}
                        />
                    </li>
                    <li className='share-popup__options-item' >
                        <ShareLink
                            text='Twitter'
                            link={getTwitterShareLink(type, id)}
                            Icon={BsTwitter}
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