import { Link } from 'react-router-dom';
import { routesConfig } from '../../../utils/configs';
import Logo from '../../UI/Logo/Logo';

function LogoLink() {
    return (
        <Link
            to={routesConfig.main}
            className='logo-link'
        >
            <Logo />
        </Link>
    );
}

export default LogoLink;