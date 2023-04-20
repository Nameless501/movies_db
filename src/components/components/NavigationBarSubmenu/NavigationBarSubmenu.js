import NavigationLink from '../../UI/NavigationLink/NavigationLink';
import './NavigationBarSubmenu.css';

function NavigationBarSubmenu({ place, title, links = [] }) {
    return (
        <nav
            className={`
                    navigation-submenu
                    ${place && 'navigation-submenu_place_' + place}
                `}
        >
            <h3
                className={`
                        navigation-submenu__title navigation-link
                        ${place && 'navigation-link_place_' + place}
                    `}
            >
                {title}
            </h3>
            <ul
                className={`
                    navigation-submenu__links-list
                    ${place && 'navigation-submenu__links-list_place_' + place}
                `}
            >
                {
                    links.map((link, index) => {
                        return (
                            <li key={index}>
                                <NavigationLink
                                    to={link.link}
                                    text={link.title}
                                    place={place + '-sub-menu'}
                                />
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    );
}

export default NavigationBarSubmenu;