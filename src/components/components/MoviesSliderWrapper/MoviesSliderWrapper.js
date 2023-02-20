import LinkButton from '../../UI/LinkButton/LinkButton';
import './MoviesSliderWrapper.css';

function MoviesSliderWrapper({ title, link, children }) {
    return (
        <section className='movies-slider-wrapper'>
            <div className='movies-slider-wrapper__flex'>
                <h2 className='movies-slider-wrapper__title' >
                    {title}
                </h2>
                <LinkButton
                    link={link}
                    place='movies-slider-small'
                    text='Смотреть еще'
                />
            </div>
            {children}
        </section>
    );
}

export default MoviesSliderWrapper;