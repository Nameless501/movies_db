import { Link } from 'react-router-dom';
import PreloaderSmall from '../../UI/PreloaderSmall/PreloaderSmall';
import './SliderSmallWrapper.css';

function SliderSmallWrapper({ title, link, loading, children }) {
    return (
        <section className='slider-small-wrapper'>
            {
                link ?
                    <Link
                        to={link}
                        className='slider-small-wrapper__link'
                    >
                        <h2 className='slider-small-wrapper__title' >
                            {title}
                            <span className='slider-small-wrapper__icon' />
                        </h2>
                    </Link>
                    :
                    <h2 className='slider-small-wrapper__title' >
                        {title}
                    </h2>
            }
            {
                loading === 'pending' && <PreloaderSmall />
            }
            {
                loading === 'fulfilled' && children
            }
        </section>
    );
}

export default SliderSmallWrapper;