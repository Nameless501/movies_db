import { IconContext } from 'react-icons';
import './ShareLink.css';

function ShareLink({ Icon, link, text, handleClick, button = false }) {
    return (
        <>
            {
                button ?
                    <button
                        className='share-link'
                        onClick={handleClick}
                    >
                        <span className='share-link__text' >
                            {text}
                        </span>
                        <IconContext.Provider
                            value={{ className: 'share-link__icon' }}
                        >
                            { Icon && <Icon /> }
                        </IconContext.Provider>
                    </button>
                    :
                    <a
                        className='share-link'
                        target='_blank'
                        rel="noreferrer"
                        href={link}
                    >
                        <span className='share-link__text' >
                            {text}
                        </span>
                        <IconContext.Provider
                            value={{ className: 'share-link__icon' }}
                        >
                            { Icon && <Icon /> }
                        </IconContext.Provider>
                    </a>
            }
        </>
    );
}

export default ShareLink;