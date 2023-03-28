import Link from '../../UI/Link/Link';
import Logo from '../../UI/Logo/Logo';
import NavigationBar from '../NavigationBar/NavigationBar';
import tmdbLogo from '../../../images/logo_tmdb.svg';
import './Footer.css';

function Footer() {
    return (
        <footer className='footer' >
            <div className='footer__divider' />
            <div className='footer__content-wrapper' >
                <div className='footer__column' >
                    <div className='footer__logos' >
                        <Logo />
                        <img
                            src={tmdbLogo}
                            alt='логотип the movies DB'
                            className='footer__api-logo'
                        />
                    </div>
                    <p className='footer__attribution'>
                        Для проекта использовано API the movies DB. Проект не проходил сертификацию TMDB.
                    </p>
                    <p className='footer__attribution' >
                        &copy; 2023
                    </p>
                </div>
                <div className='footer__column' >
                    <h4 className='footer__column-title'>
                        Карта сайта
                    </h4>
                    <NavigationBar place='footer' />
                </div>
                <div className='footer__column' >
                    <h4 className='footer__column-title'>
                        Ссылки
                    </h4>
                    <ul className='footer__links-list' >
                        <li>
                            <Link
                                href='https://github.com/Nameless501/movies_db'
                                place='footer'
                                text='GitHub'
                            />
                        </li>
                        <li>
                            <Link
                                href='https://www.themoviedb.org/'
                                place='footer'
                                text='The movie DB'
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;