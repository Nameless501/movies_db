import NavigationLink from '../../UI/NavigationLink/NavigationLink';
import NavigationBarSubmenu from '../NavigationBarSubmenu/NavigationBarSubmenu';
import { routesConfig } from '../../../utils/configs';
import './NavigationBar.css';

function NavigationBar({ place, showMainLink = false }) {
    const moviesLinks = [
        { url: routesConfig.topRated, name: 'Популярные' },
        { url: routesConfig.nowPlaying, name: 'Сейчас в кино' },
    ]

    return (
        <nav className='navigation-bar' >
            <ul
                className={`
                    navigation-bar__links-list
                    ${place ? 'navigation-bar__links-list_place_' + place : null}
                `}
            >
                <li>
                    <NavigationLink
                        to={routesConfig.main}
                        text='Главная'
                        place={place}
                    />
                </li>
                <li>
                    <NavigationBarSubmenu
                        title='Фильмы'
                        place={place}
                        links={moviesLinks}
                    />
                </li>
                <li>
                    <NavigationBarSubmenu
                        title='Сериалы'
                        place={place}
                        links={moviesLinks}
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