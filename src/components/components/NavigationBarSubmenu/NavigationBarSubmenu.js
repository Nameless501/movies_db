import NavigationLink from '../../UI/NavigationLink/NavigationLink';
import './NavigationBarSubmenu.css';

function NavigationBarSubmenu({ place, title, links = [] }) {
    return (
        <nav className='navigation-submenu' >
            <div className='navigation-submenu__title-wrapper' >
                <h3 className={`
                    navigation-submenu__title navigation-link
                    ${place ? 'navigation-link_place_' + place : null}
                `}
                >
                    {title}
                </h3>
                <span className='navigation-submenu__title-icon' />
            </div>
            <ul
                className={`
                    navigation-submenu__links-list
                    ${place ? 'navigation-submenu__links-list_place_' + place : null}
                `}
            >
                {
                    links.map((link, index) => {
                        return (
                            <li key={index}>
                                <NavigationLink
                                    to={link.link}
                                    text={link.title}
                                    place='submenu'
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