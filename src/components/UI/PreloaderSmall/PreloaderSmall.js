import { IconContext } from 'react-icons';
import { FaSpinner } from 'react-icons/fa';
import './PreloaderSmall.css';

const PreloaderSmall = () => {
    return (
        <div className="preloader-small">
            <IconContext.Provider
                value={{ className: 'preloader-small__spinner' }}
            >
                <FaSpinner />
            </IconContext.Provider>
        </div>
    )
};

export default PreloaderSmall
