import './Link.css';

function Link({ href, place, text, target = '_blank' }) {
    return (
        <a
            href={href}
            className={`
                link
                ${place ? 'link_place_' + place : null}
            `}
            target={target}
        >
            {text}
        </a>
    );
}

export default Link;