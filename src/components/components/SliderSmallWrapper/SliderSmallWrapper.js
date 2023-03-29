import LinkButton from '../../UI/LinkButton/LinkButton';
import './SliderSmallWrapper.css';

function SliderSmallWrapper({ title, link, children }) {
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
            {children}
        </section>
    );
}

export default SliderSmallWrapper;