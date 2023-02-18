import NavigationLink from '../../UI/NavigationLink/NavigationLink';
import { routesConfig } from '../../../utils/configs';
import './NavigationBar.css';

function NavigationBar({ place, showMainLink = false }) {
    return (
        <nav className='navigation-bar' >
            <ul
                className={`
                    navigation-bar__links-list
                    ${place ? 'navigation-bar__links-list_place_' + place : null}
                `}
            >
                {showMainLink &&
                    <li>
                        <NavigationLink
                            to={routesConfig.main}
                            text='Главная'
                            place={place}
                        />
                    </li>
                }
                <li>
                    <NavigationLink
                        to={routesConfig.topRated}
                        text='Популярное'
                        place={place}
                    />
                </li>
                <li>
                    <NavigationLink
                        to={routesConfig.search}
                        text='Поиск'
                        place={place}
                    />
                </li>
                <li>
                    <NavigationLink
                        to={routesConfig.savedMovies}
                        text='Сохранённые фильмы'
                        place={place}
                    />
                </li>
            </ul>
        </nav>
    );
}

export default NavigationBar;