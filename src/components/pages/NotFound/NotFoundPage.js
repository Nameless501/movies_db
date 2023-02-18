import NavigationLink from '../../UI/NavigationLink/NavigationLink';
import NotFoundScreen from '../../UI/NotFoundScreen/NotFoundScreen';
import { routesConfig } from '../../../utils/configs';
import './NotFoundPage.css';

function NotFoundPage() {
    return (
        <main className='not-found-page'>
            <NotFoundScreen />
            <NavigationLink
                to={routesConfig.main}
                text='Назад'
                place='not-found'
            />
        </main>
    );
}

export default NotFoundPage;