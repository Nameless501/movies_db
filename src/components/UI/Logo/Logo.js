import icon from '../../../images/logo.svg';
import './Logo.css';

function Logo() {
    return (
        <img src={icon} alt='логотип сайта' className='logo' />
    );
}

export default Logo;