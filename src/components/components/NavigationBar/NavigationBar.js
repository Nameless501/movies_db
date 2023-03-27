import NavigationLink from '../../UI/NavigationLink/NavigationLink';
import NavigationBarSubmenu from '../NavigationBarSubmenu/NavigationBarSubmenu';
import { navBarConfig } from '../../../utils/configs';
import './NavigationBar.css';

function NavigationBar({ place }) {
    return (
        <nav className='navigation-bar' >
            <ul
                className={`
                    navigation-bar__links-list
                    ${ place && 'navigation-bar__links-list_place_' + place }
                `}
            >
                {
                    navBarConfig.map((item, index) => {
                        return (
                            <li
                                key={index}
                                className='navigation-bar__list-item'
                            >
                                {item.isDropdown ?
                                    <NavigationBarSubmenu
                                        title={item.title}
                                        place={place}
                                        links={item.links}
                                    />
                                    :
                                    <NavigationLink
                                        to={item.link}
                                        text={item.title}
                                        place={place}
                                    />
                                }
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    );
}

export default NavigationBar;