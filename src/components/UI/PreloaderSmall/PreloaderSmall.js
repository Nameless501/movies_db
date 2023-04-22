import { IconContext } from 'react-icons';
import { FaSpinner } from 'react-icons/fa';
import './PreloaderSmall.css';

const PreloaderSmall = ({ place }) => {
    return (
        <div className='preloader-small' >
            <IconContext.Provider
                value={{
                    className: `preloader-small__spinner ${place && 'preloader-small__spinner_place_' + place }`
                }}
            >
                <FaSpinner />
            </IconContext.Provider>
        </div>
    )
};

export default PreloaderSmall
