import './PortfolioLink.css';

function PortfolioLink({ href, text }) {
    return (
        <a
            href={href}
            target='_blank'
            rel="noreferrer"
            className='portfolio-link'
        >
            <span className='portfolio-link__text' >
                {text}
            </span>
            <span className='portfolio-link__icon' >
                &#8599;
            </span>
        </a>
    );
}

export default PortfolioLink;