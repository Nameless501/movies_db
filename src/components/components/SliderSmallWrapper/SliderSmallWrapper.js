import LinkButton from '../../UI/LinkButton/LinkButton';
import PreloaderSmall from '../../UI/PreloaderSmall/PreloaderSmall';
import './SliderSmallWrapper.css';

function SliderSmallWrapper({ title, link, loading, children }) {
    return (
        <section className='slider-small-wrapper'>
            <div className='slider-small-wrapper__flex'>
                <h2 className='slider-small-wrapper__title' >
                    {title}
                </h2>
                {link &&
                    <LinkButton
                        link={link}
                        place='slider-small'
                        text='Смотреть еще'
                    />
                }
            </div>
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