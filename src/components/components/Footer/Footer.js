import Link from '../../UI/Link/Link';
import './Footer.css';

function Footer() {
    return (
        <footer className='footer' >
            <h3 className='footer__title' >
                Учебный проект
            </h3>
            <div className='footer__content-wrapper' >
                <p className='footer__copyright' >
                    &copy; 2023
                </p>
                <nav className='footer__navigation' >
                    <ul className='footer__links-list' >
                        <li>
                            <Link
                                href='https://github.com/Nameless501/movies_db'
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