import PortfolioLink from '../../UI/PortfolioLink/PortfolioLink';
import { PORTFOLIO_LINKS } from '../../../utils/constants';
import './PortfolioLinksList.css';

function PortfolioLinksList() {
    return (
        <ul className='portfolio-links-list' >
            {PORTFOLIO_LINKS.map((link, index) => {
                return (
                    <li
                        key={index}
                        className='portfolio-links-list__item'
                    >
                        <PortfolioLink
                            text={link.text}
                            href={link.url}
                        />
                    </li>
                )
            })}
        </ul>
    );
}

export default PortfolioLinksList;