import Link from '../../UI/Link/Link';
import './Footer.css';

function Footer() {
    return (
        <footer className='footer' >
            <h3 className='footer__title' >
                Учебный проект Яндекс.Практикум х BeatFilm.
            </h3>
            <div className='footer__content-wrapper' >
                <p className='footer__copyright' >
                    &copy; 2023
                </p>
                <nav className='footer__navigation' >
                    <ul className='footer__links-list' >
                        <li>
                            <Link
                                href='https://practicum.yandex.ru/'
                                place='footer'
                                text='Яндекс.Практикум'
                            />
                        </li>
                        <li>
                            <Link
                                href='https://github.com/'
                                place='footer'
                                text='GitHub'
                            />
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;