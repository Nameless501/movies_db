import './ShareLink.css';

function ShareLink({ link, text, icon, handleClick, button = false }) {
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
                        <img
                            src={icon}
                            alt={text + ' иконка'}
                            className='share-link__icon'
                        />
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
                        <img
                            src={icon}
                            alt={text + ' иконка'}
                            className='share-link__icon'
                        />
                    </a>
            }
        </>
    );
}

export default ShareLink;